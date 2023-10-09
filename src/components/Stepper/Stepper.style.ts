import { Stepper, MantineThemeComponent } from '@mantine/core';
import stepperClasses from './Stepper.module.css';

export const stepperStyle: MantineThemeComponent = Stepper.extend({
  classNames: stepperClasses,
});
