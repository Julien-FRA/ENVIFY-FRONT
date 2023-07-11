'use client';
import { MantineProvider, Button } from '@mantine/core';

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        defaultRadius: 5,
        primaryColor: 'violet',
        fontFamily: 'Manrope, sans-serif',
        primaryShade: 0,
        colors: {
          violet: ['#735BD1', '#9B8ADC', '#C7BFFD', '#E3D7FF', '#FFF2FF'],
          gray: ['#171717', '#202020', '#5B5B5B', '#979797', '#CCCCCC'],
        },
      }}
    >
      <Button>Button</Button>
    </MantineProvider>
  );
}
