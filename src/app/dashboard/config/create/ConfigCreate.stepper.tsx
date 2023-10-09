'use client';
import { Step, Stepper } from '@/components/Stepper/Stepper';
import {
  StepperFormProvider,
  StepperProvider,
} from '@/components/Stepper/Stepper.provider';
import { ConfigNameBlock } from './block/ConfigName.block';
import { SelectPackage } from './block/SelectPackage.block';
import { StepperButtons } from '@/components/Stepper/StepperButton';
import { UseFormInput, hasLength, isNotEmpty } from '@mantine/form';
import {
  ConfigContext,
  ConfigFormProvider,
  useConfigForm,
} from './configForm.context';

export const configCreateFormInput: UseFormInput<ConfigContext> = {
  initialValues: {
    configName: '',
    operatingSystem: {
      id: 0,
      versionId: 0,
    },
    packages: [],
  },
  validate: {
    configName: hasLength(
      { min: 3, max: 10 },
      'the config name should be more than 2 characters long'
    ),
    packages: isNotEmpty('Please Select a Package'),
    operatingSystem: {
      id: hasLength({ min: 1 }, 'Please Select an Os'),
      versionId: hasLength({ min: 1 }, 'Please Select an Os version'),
    },
  },
};

export const ConfigCreateStepper = () => {
  return (
    <StepperFormProvider
      formInput={configCreateFormInput}
      FormProvider={ConfigFormProvider}
      useForm={useConfigForm}
    >
      <StepperProvider>
        <Stepper>
          <Step
            label="Choose a config name"
            description="To save and identify it"
          >
            <ConfigNameBlock />
          </Step>
          <Step
            label="Select your modules"
            description="Container, packages, db... "
          >
            <SelectPackage />
          </Step>
        </Stepper>
        <StepperButtons
          stepsValidation={[['configName', 'operatingSystem'], 'packages']}
        />
      </StepperProvider>
    </StepperFormProvider>
  );
};
