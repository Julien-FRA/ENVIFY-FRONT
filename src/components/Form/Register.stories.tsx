import type { StoryObj, Meta } from '@storybook/react';
import { RegisterForm } from './Register.form';
import React from 'react';
import { Group } from '@mantine/core';

const meta: Meta<typeof RegisterForm> = {
  title: 'components/Forms/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <Group>
        <Story />
      </Group>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const DefaultRegister: Story = {
  render: () => (
    <>
      <RegisterForm />
    </>
  ),
};
