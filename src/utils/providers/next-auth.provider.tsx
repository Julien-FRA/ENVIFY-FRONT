'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children?: JSX.Element;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
