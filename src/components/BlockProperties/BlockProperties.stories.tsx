import type { StoryObj, Meta } from '@storybook/react';
import { BlockProperties } from '.';
import React from 'react';
import { FormProvider } from '../Stepper/Stepper.provider';
import { configCreateFormInput } from '@/app/dashboard/config/create/ConfigCreate.stepper';
import {
  ConfigFormProvider,
  useConfigForm,
} from '@/app/dashboard/config/create/configForm.context';

const meta: Meta<typeof BlockProperties> = {
  title: 'components/Blocks/BlockProperties',
  component: BlockProperties,
  tags: ['autodocs'],
  args: {
    description: 'Desc',
    packageIndex: 0,
    packagePropeties: [],
  },
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
  render: (args) => (
    <FormProvider
      mutation={() => {}}
      formInput={configCreateFormInput}
      FormProvider={ConfigFormProvider}
      useForm={useConfigForm}
    >
      <BlockProperties {...args} />
    </FormProvider>
  ),
};
