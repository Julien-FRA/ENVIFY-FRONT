import { userAuthenticate } from '@/utils/api/user.api';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const res = await userAuthenticate({
          email: credentials.email,
          password: credentials.password,
        });
        if (!res) return null;

        return { id: res.email, email: res.email, apiToken: res.token };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
    newUser: '/register', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};
