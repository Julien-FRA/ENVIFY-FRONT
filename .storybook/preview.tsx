import { MantineProvider } from '@mantine/core';
import type { Preview } from '@storybook/react';
import { mantineTheme } from '../src/components/Theme/base.theme';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#DDD' },
        { name: 'dark', value: '#222' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// This is the place responsible for grouping all decorators from the storybook app
export const decorators: Preview['decorators'] = [
  (Story) => {
    return <MantineProvider theme={mantineTheme}>{Story()}</MantineProvider>;
  },
];

export default preview;
