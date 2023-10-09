import { Sidebar } from '@/components/Nav/Sidebar';
import { AppShell, AppShellMain, Container } from '@mantine/core';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppShell navbar={{ width: 250, breakpoint: 'sm' }}>
        <Sidebar />
        <AppShellMain>
          <Container mt="xl" size="lg">
            {children}
          </Container>
        </AppShellMain>
      </AppShell>
      <></>
    </>
  );
}
