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
        color: theme.white,
        backgroundColor: theme.colors.violet[0],
        ...theme.fn.hover({
          backgroundColor: theme.colors.violet[3],
        }),
        '&:hover': { backgroundColor: theme.colors.violet[1] },
      },
    }),
    secondary: (theme: MantineTheme) => ({
      root: {
        a: {
          color: theme.white,
        },
        color: theme.white,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.white}`,
        '&:hover': { backgroundColor: theme.colors.violet[1] },
      },
    }),
    arrow: (theme: MantineTheme) => ({
      root: {
        a: {
          color: theme.white,
        },
        color: theme.white,
        backgroundColor: 'none',
        border: `none`,
        '&:hover': { textDecoration: 'underline' },
      },
    }),
  },
};
