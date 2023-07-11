import React from 'react';
import { MantineProvider, ButtonStylesParams } from '@mantine/core';

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        defaultRadius: 5,
        primaryColor: 'violet',
        primaryShade: 0,
        white: '#fff',
        colors: {
          violet: ['#735BD1', '#9B8ADC', '#C7BFFD', '#E3D7FF', '#FFF2FF'],
          dark: ['#171717', '#202020', '#5B5B5B', '#979797', '#CCCCCC'],
        },

        components: {
          Button: {
            styles: (theme, params: ButtonStylesParams, { variant }) => ({
              root: {
                height: '40px',
                padding: '0 20px',
                backgroundColor:
                  variant === 'filled'
                    ? theme.colors[params.color || theme.primaryColor][0]
                    : undefined,
                border: `2px solid ${theme.colors[params.color || theme.primaryColor][2]}`,
              },
            }),
          },
        },
      }}
    >
      {children}
    </MantineProvider>
  );
}
