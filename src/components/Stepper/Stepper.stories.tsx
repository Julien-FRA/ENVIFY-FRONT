import type { StoryObj, Meta } from '@storybook/react';
import { Step, Stepper } from './Stepper';
import { Container } from '@mantine/core';
import { StepperFormProvider, StepperProvider } from './Stepper.provider';
import { StepperButtons } from './StepperButton';
import { ConfigNameBlock } from '@/app/dashboard/config/create/block/ConfigName.block';
import {
  ConfigFormProvider,
  useConfigForm,
} from '@/app/dashboard/config/create/configForm.context';
import { configCreateFormInput } from '@/app/dashboard/config/create/ConfigCreate.stepper';
import { ConfigProperties } from '@/app/dashboard/config/create/block/ConfigProperties.block';

const meta: Meta<typeof StepperFormProvider> = {
  title: 'components/Forms/StepperForm',
  component: StepperFormProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StepperFormProvider>;

export const Default: Story = {
  render: () => (
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
            label="Select you properties"
            description="Choose your personal propeties"
          >
            <ConfigProperties />
          </Step>
        </Stepper>
        <StepperButtons
          stepsValidation={[
            ['configName', 'operatingSystem'],
            'packages',
            'packagesProperties',
          ]}
        />
      </StepperProvider>
    </StepperFormProvider>
  ),
};
