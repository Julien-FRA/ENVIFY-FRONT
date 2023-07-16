'use client';
import HeaderVertical from '@/components/Nav/Header.vertical';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderVertical />
      <main>{children}</main>
    </>
  );
}
