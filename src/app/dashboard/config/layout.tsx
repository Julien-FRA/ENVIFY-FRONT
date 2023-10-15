import { Box } from '@mantine/core';

export default function ConfigLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box pt={30}>{children}</Box>;
}
