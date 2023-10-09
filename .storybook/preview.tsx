import '@mantine/core/styles.css';
import '../src/app/global.css';
import { MantineProvider } from '@mantine/core';
import type { Preview } from '@storybook/react';
import { mantineTheme } from '../src/components/Theme/base.theme';
import { ReactQueryClientProvider } from '@/utils/providers/react-query.provider';

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
    return (
      <ReactQueryClientProvider>
        <MantineProvider theme={mantineTheme}>{Story()}</MantineProvider>;
      </ReactQueryClientProvider>
    );
  },
];

export default preview;
