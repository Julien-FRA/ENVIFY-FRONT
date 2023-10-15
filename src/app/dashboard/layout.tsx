import { Sidebar } from '@/components/Nav/Sidebar';
import { getAuthSession } from '@/utils/authOptions';
import { AppShell, AppShellMain, Container } from '@mantine/core';
import jwt_decode from 'jwt-decode';
import { signOut } from 'next-auth/react';
import { PropsWithChildren } from 'react';

type DecodedToken = {
  role?: { authority: string }[];
  id: number;
  email: string;
  iat: number;
  exp: number;
};

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const session = await getAuthSession();

  if (session?.jwtToken) {
    const decodedToken = jwt_decode(session.jwtToken) as DecodedToken;
    if (!decodedToken.exp) return;
    const expirationTime = decodedToken.exp;
    const expirationDate = new Date(expirationTime * 1000);
    const currentDate = new Date();
    const oneDayBeforeExpiration = new Date(
      expirationDate.getTime() - 24 * 60 * 60 * 1000
    );
    if (oneDayBeforeExpiration < currentDate) {
      await signOut({ callbackUrl: '/' });
    }
  }
  return (
    <AppShell navbar={{ width: 250, breakpoint: 'sm' }}>
      <Sidebar />
      <AppShellMain>
        <Container mt="xl" size="lg">
          {children}
        </Container>
      </AppShellMain>
    </AppShell>
  );
}
