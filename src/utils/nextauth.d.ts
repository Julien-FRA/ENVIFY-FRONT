import type { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    jwtToken: string;
    user: DefaultSession['user'] & {
      access_token?: JWT | string;
      jwtToken?: string;
    };
  }

  interface User {
    id: DefaultUser['id'];
    email: DefaultUser['email'];
    jwtToken: string;
  }

  interface JWT {
    jwtToken: string;
  }
}
