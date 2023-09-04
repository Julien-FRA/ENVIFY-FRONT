import { MantineTheme } from '@mantine/core';

export const buttonStyle = {
  styles: () => ({
    root: {
      height: '40px',
      padding: '0 20px',
      a: {
        textDecoration: 'none',
      },
    },
  }),
  variants: {
    primary: (theme: MantineTheme) => ({
      root: {
        a: {
          color: theme.white,
        },
        color: theme.black,
        backgroundColor: theme.colors.violet[0],
        ...theme.fn.hover({
          backgroundColor: theme.colors.violet[3],
        }),
      },
    }),
    secondary: (theme: MantineTheme) => ({
      root: {
        a: {
          color: theme.colors.violet[0],
        },
        color: theme.black,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.colors.violet[0]}`,
      },
    }),
  },
};
