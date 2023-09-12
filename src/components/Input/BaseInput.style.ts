import { InputBase, MantineThemeComponent } from '@mantine/core';
import baseInputClasses from './BaseInput.module.css';

export const baseInputStyle: MantineThemeComponent = InputBase.extend({
  classNames: baseInputClasses,
});
