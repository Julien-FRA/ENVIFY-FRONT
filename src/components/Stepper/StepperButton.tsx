'use client';
import { Button } from '@/components/Button';
import { Group } from '@mantine/core';
import { useStepperContext } from './Stepper.provider';
import { useConfigFormContext } from '@/app/dashboard/config/create/configForm.context';

type StepperButtonsProps = {
  stepsValidation?: (string | string[])[];
};

export const StepperButtons = ({
  stepsValidation,
}: StepperButtonsProps): JSX.Element => {
  const form = useConfigFormContext();

  const { activeStep, prevStep, nextStep } = useStepperContext();

  const isValidate = () => {
    if (!stepsValidation) return false;
    const currentStepFields = stepsValidation[activeStep];

    if (currentStepFields instanceof Array) {
      const errors = currentStepFields.map((field) => form.isValid(field));

      const allTrue = errors.every((value) => value);
      return !allTrue;
    }

    return !form.isValid(currentStepFields);
  };

  return (
    <Group justify="end" mt="xl" pb="xl">
      {activeStep > 0 ? (
        <Button onClick={prevStep} variant="outline" type="submit">
          Précédent
        </Button>
      ) : null}
      <Button onClick={nextStep} disabled={isValidate()} type="submit">
        Confirmer
      </Button>
    </Group>
  );
};
