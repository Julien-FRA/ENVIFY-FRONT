import type { StoryObj, Meta } from '@storybook/react';
import { BlockProperties } from '.';
import React from 'react';
import {
  StepperFormProvider,
  StepperProvider,
} from '../Stepper/Stepper.provider';
import { configCreateFormInput } from '@/app/dashboard/config/create/ConfigCreate.stepper';
import {
  ConfigFormProvider,
  useConfigForm,
} from '@/app/dashboard/config/create/configForm.context';

const meta: Meta<typeof BlockProperties> = {
  title: 'components/Blocks/BlockProperties',
  component: BlockProperties,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {},
  decorators: [(Story) => <Story />],
};
export default meta;
type Story = StoryObj<typeof BlockProperties>;

export const Default: Story = {
  render: () => (
    <StepperFormProvider
      formInput={configCreateFormInput}
      FormProvider={ConfigFormProvider}
      useForm={useConfigForm}
    >
      <StepperProvider>
        <BlockProperties
          packageProperty={{
            packageName: 'Maria DB',
            packageVersionId: 5,
            properties: [
              {
                type: 'text',
                category: 'mysqld',
                field: 'port',
                label: 'Port',
                value: '3306',
              },
              {
                type: 'select',
                category: 'user',
                field: 'user',
                label: 'Add user',
                value: 'OFF',
                items: ['on', 'off'],
              },
              {
                type: 'multiple',
                category: 'server',
                field: 'server',
                label: 'Add server',
                value: [],
                properties: [
                  {
                    type: 'text',
                    category: 'mysqld',
                    field: 'port',
                    label: 'Port',
                    value: '3306',
                  },
                  {
                    type: 'select',
                    category: 'user',
                    field: 'user',
                    label: 'Add user',
                    value: 'OFF',
                    items: ['on', 'off'],
                  },
                ],
              },
            ],
          }}
          packagePropertyIndex={5}
        />
      </StepperProvider>
    </StepperFormProvider>
  ),
};
