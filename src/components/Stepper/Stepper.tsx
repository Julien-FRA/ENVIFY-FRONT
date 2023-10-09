'use client';
import React from 'react';
import { Stepper as StepperContainer, StepperProps } from '@mantine/core';
import { useStepperContext } from './Stepper.provider';
import { ScrollArea, StepperStep, StepperStepProps } from '@mantine/core';

export const Stepper = ({
  children,
  ...props
}: Omit<StepperProps, 'active'>) => {
  const { activeStep, setActiveStep } = useStepperContext();

  return (
    <StepperContainer
      color="violet"
      radius="sm"
      size="md"
      active={activeStep}
      onStepClick={setActiveStep}
      {...props}
    >
      {children}
    </StepperContainer>
  );
};

export const Step = ({ children, ...props }: StepperStepProps) => (
  <StepperStep {...props}>
    <ScrollArea>{children}</ScrollArea>
  </StepperStep>
);
