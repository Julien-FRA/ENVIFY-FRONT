'use client';
import { MantineProvider } from '@mantine/core';
import { cssResolver, mantineTheme } from './base.theme';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const Theme = ({ children }: { children: JSX.Element }) => {
  return (
    <MantineProvider
      theme={{ ...mantineTheme, ...manrope.style }}
      cssVariablesResolver={cssResolver}
    >
      {children}
    </MantineProvider>
  );
};
