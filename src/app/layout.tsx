import { Theme } from '@/components/Theme';
import '@mantine/core/styles.css';
import './global.css';

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
