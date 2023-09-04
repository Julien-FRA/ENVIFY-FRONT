import { MantineTheme } from '@mantine/core';

export const baseInputStyle = {
  styles: (theme: MantineTheme) => ({
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
};
