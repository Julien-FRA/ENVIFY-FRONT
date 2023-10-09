import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

// Import your theme object
import { cssResolver, mantineTheme } from '../components/Theme/base.theme';

export function render(ui: JSX.Element) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: JSX.Element }) => (
      <MantineProvider
        theme={mantineTheme}
        defaultColorScheme="dark"
        cssVariablesResolver={cssResolver}
      >
        {children}
      </MantineProvider>
    ),
  });
}
