import { userAuthenticate } from '@/utils/api/user.api';
import { type AuthOptions, getServerSession } from 'next-auth';
import { TOKEN_MAX_AGE } from '@/utils/helpers';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getSession } from 'next-auth/react';

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

        const jwtToken = res.token;

        return { id: res.userId, email: res.email, jwtToken };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: TOKEN_MAX_AGE,
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      // user is only available the first time a user signs in authorized
      if (user) {
        return {
          ...token,
          jwt: user.jwtToken,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.jwtToken = token.jwt as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    newUser: '/register', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

export const getAuthSession = async (type: 'client' | 'server' = 'server') => {
  const session =
    type === 'server'
      ? await getServerSession(authOptions)
      : await getSession();
  return session;
};
