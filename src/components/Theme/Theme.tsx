'use client';
import { MantineProvider } from '@mantine/core';
import { mantineTheme } from './base.theme';

export default function Theme({ children }: { children: JSX.Element }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={mantineTheme}
    >
      {children}
    </MantineProvider>
  );
}
