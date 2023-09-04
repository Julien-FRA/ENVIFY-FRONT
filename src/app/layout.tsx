import Theme from '../components/Theme/Theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
