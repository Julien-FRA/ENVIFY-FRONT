import { MantineTheme } from '@mantine/core';

export const buttonStyle = {
  styles: () => ({
    root: {
      height: 40,
      a: {
        textDecoration: 'none',
      },
    },
  }),
  variants: {
    filled: (theme: MantineTheme) => ({
      root: {
        a: {
          color: theme.white,
        },
        color: theme.white,
        border: `1px solid ${theme.colors.violet[1]}`,
        '&:hover': {
          backgroundColor: theme.colors.violet[1],
        },
      },
    }),
    outline: (theme: MantineTheme) => ({
      root: {
        a: {
          color: theme.white,
        },
        color: theme.white,
        border: `1px solid ${theme.white}`,
        ...theme.fn.hover({
          backgroundColor: theme.white,
        }),
        '&:hover': {
          backgroundColor: theme.white,
          color: theme.colors.violet[0],
          border: `1px solid ${theme.colors.violet[0]}`,
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          border: `1px solid ${theme.colors.gray[2]}`,
        },
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
