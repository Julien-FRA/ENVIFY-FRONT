import { Sidebar } from '@/components/Nav/Sidebar';
import { NextAuthProvider } from '@/utils/providers/next-auth.provider';
import { AppShell, AppShellMain, Container } from '@mantine/core';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <AppShell navbar={{ width: 250, breakpoint: 'sm' }}>
        <Sidebar />
        <AppShellMain>
          <Container mt="xl" size="lg">
            {children}
          </Container>
        </AppShellMain>
      </AppShell>
    </NextAuthProvider>
  );
}
