import { MantineProvider, ButtonStylesParams } from '@mantine/core';

export default function Theme({ children }: { children: JSX.Element }) {
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
                border:
                  variant === 'outline'
                    ? `1px solid ${
                        theme.colors[params.color || theme.primaryColor][2]
                      }`
                    : undefined,
                color: theme.colors[theme.white],
              },
            }),
          },
          TextInput: {
            styles: (theme) => ({
              input: {
                border: `1px solid ${theme.colors.dark[2]}`,
                backgroundColor: `${theme.colors.dark[1]}`,
                borderRadius: '5px',
                color: `${theme.colors.dark[3]}`,
              },
              label: {
                color: theme.colors.dark[3],
                fontSize: '14px',
                marginBottom: '6px',
              },
              description: {
                marginBottom: '4px',
              },
            }),
          },
          PasswordInput: {
            styles: (theme) => ({
              input: {
                border: `1px solid ${theme.colors.dark[2]}`,
                backgroundColor: `${theme.colors.dark[1]}`,
                borderRadius: '5px',
                color: `${theme.colors.dark[3]}`,
              },
              label: {
                color: theme.colors.dark[3],
                fontSize: '14px',
                marginBottom: '6px',
              },
              description: {
                marginBottom: '4px',
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
