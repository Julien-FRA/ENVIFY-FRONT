import { Button, MantineThemeComponent } from '@mantine/core';
import buttonClasses from './Button.module.css';

export const buttonStyle: MantineThemeComponent = Button.extend({
  classNames: buttonClasses,
});
