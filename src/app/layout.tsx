import { Theme } from '@/components/Theme';
import './global.css';
import '@mantine/core/styles.layer.css';
import { ReactQueryClientProvider } from '@/utils/providers/react-query.provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Envify</title>
        <link rel="icon" type="image/x-icon" href="../logo.svg" />
      </head>
      <body>
        <Theme>
          <ReactQueryClientProvider>
            <main>{children}</main>
          </ReactQueryClientProvider>
        </Theme>
      </body>
    </html>
  );
}
