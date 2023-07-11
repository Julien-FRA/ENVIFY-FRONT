'use client';
import Header from '@/components/Nav/Header';
import './globals.css';
import { Manrope } from 'next/font/google';
import React from 'react';
import { Button } from '@mantine/core';
import Theme from '../components/Theme/Theme';

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <Theme>
          <Header />
          <main>{children}</main>
          <Button>Validate</Button>
        </Theme>
      </body>
    </html>
  );
}
