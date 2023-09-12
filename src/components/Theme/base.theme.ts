import { CSSVariablesResolver, createTheme, rem } from '@mantine/core';
import { buttonStyle } from '../Button/Button.style';
import { baseInputStyle } from '../Input/BaseInput.style';

export const mantineTheme = createTheme({
  defaultRadius: 5,
  white: '#ffffff',
  primaryColor: 'violet',
  fontFamily: 'Manrope, sans-serif',
  colors: {
    violet: [
      '#efeaff',
      '#ccc2f3',
      '#aa9be5',
      '#8874d9',
      '#664ccd',
      '#4c32b3',
      '#3b278c',
      '#291b66',
      '#18103f',
      '#08051b',
    ],
  },
  components: {
    Button: buttonStyle,
    TextInput: baseInputStyle,
    PasswordInput: baseInputStyle,
  },
  other: {
    spacing: {
      xxs: rem(5),
    },
  },
});

export const cssResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-spacing-xxs': theme.other.spacing.xxs,
  },
  light: {},
  dark: {},
});
