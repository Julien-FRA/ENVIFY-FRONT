import { MantineThemeOverride } from '@mantine/core';
import { buttonStyle } from '../Button/button.style';
import { baseInputStyle } from '../Input/baseInput.style';

export const mantineTheme: MantineThemeOverride = {
  defaultRadius: 5,
  white: '#ffffff',
  primaryColor: 'violet',
  primaryShade: 0,
  colors: {
    violet: ['#735BD1', '#9B8ADC', '#735BD1', '#735BD1', '#735BD1'],
    dark: ['#171717', '#202020', '#5B5B5B', '#979797', '#CCCCCC'],
  },
  globalStyles: (theme) => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    body: {
      ...theme.fn.fontStyles(),
      backgroundColor: theme.colors.dark[0],
      color: theme.white,
      lineHeight: theme.lineHeight,
    },
  }),
  components: {
    Button: buttonStyle,
    TextInput: baseInputStyle,
    PasswordInput: baseInputStyle,
  },
};
