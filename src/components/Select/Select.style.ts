import { MantineThemeComponent, Select } from '@mantine/core';
import selectClasses from './Select.module.css';

export const selectStyle: MantineThemeComponent = Select.extend({
  classNames: selectClasses,
});
