'use client';
import { Step, Stepper } from '@/components/Stepper/Stepper';
import {
  FormProvider,
  StepperProvider,
} from '@/components/Stepper/Stepper.provider';
import { ConfigNameBlock } from './block/ConfigName.block';
import { SelectPackage } from './block/SelectPackage.block';
import { StepperButtons } from '@/components/Stepper/StepperButton';
import { UseFormInput } from '@mantine/form';
import { ConfigFormProvider, useConfigForm } from './configForm.context';
import { ConfigInput } from '@/utils/types/config.type';
import { ConfigProperties } from './block/ConfigProperties.block';
import { Box, StepperCompleted, Title } from '@mantine/core';
import { ConfirmConfig } from './block/ConfirmConfig.block';
import { postCofing } from '@/utils/api/config.api';
import { useMutation } from 'react-query';
import { BlockScript } from '@/components/BlockScript';

export const configCreateFormInput: UseFormInput<ConfigInput> = {
  initialValues: {
    name: '',
    description: '',
    os: {
      versionId: 0,
      versionNumber: '',
      name: '',
    },
    packages: [],
  },
  validate: {
    // todo find a way to use validation without blocking the form
    // name: hasLength(
    //   { min: 3, max: 50 },
    //   'the config name should be more than 2 characters long'
    // ),
    // os: {
    //   versionId: hasLength({ min: 1 }, 'Please Select an Os'),
    //   name: hasLength({ min: 1 }, 'Please Select an Os'),
    //   versionNumber: hasLength({ min: 1 }, 'Please Select an Os version'),
    // },
    // b: (value, values, path) => (path === 'a.0.b' ? 'error' : null),
    // packages: {
    //   name: hasLength({ min: 30 }, 'Please Select an Os'),
    // name: isNotEmpty('Please Select a Package'),
    // name: isNotEmpty('Please Select a Package'),
    // packageProperties: {
    //   properties: {
    //     value: isNotEmpty('Need value'),
    //   },
    // },
    // },
  },
};

export const ConfigCreateStepper = () => {
  const { data, mutateAsync } = useMutation((configData: ConfigInput) =>
    postCofing(configData)
  );

  return (
    <FormProvider
      formInput={configCreateFormInput}
      FormProvider={ConfigFormProvider}
      useForm={useConfigForm}
      mutation={mutateAsync}
    >
      {data ? (
        <BlockScript scripts={data.scripts} configFiles={data.configFiles} />
      ) : (
        <ConfigStepper />
      )}
    </FormProvider>
  );
};

const ConfigStepper = () => (
  <Box>
    <Title order={1} mb="xl">
      Create your new config
    </Title>
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
        <Step
          label="Select you properties"
          description="Choose your personal propeties"
        >
          <ConfigProperties />
        </Step>
        <StepperCompleted>
          <ConfirmConfig />
        </StepperCompleted>
      </Stepper>
      <StepperButtons
        stepsValidation={[
          ['name', 'os.name', 'os.versionNumber'],
          'packages.name',
          'packages.packagesProperties',
        ]}
      />
    </StepperProvider>
  </Box>
);
