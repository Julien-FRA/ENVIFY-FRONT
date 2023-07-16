'use client';
import { Manrope } from 'next/font/google';
import React from 'react';
import Theme from '../components/Theme/Theme';
import styled from '@emotion/styled';

const manrope = Manrope({ subsets: ['latin'] });

const BodyCustom = styled.body`
  background-color: #171717;
  color: #fff;
  margin: 0;
  padding: 0;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <BodyCustom className={manrope.className}>
        <Theme>
          <main>{children}</main>
        </Theme>
      </BodyCustom>
    </html>
  );
}
