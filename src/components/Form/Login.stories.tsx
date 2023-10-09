import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Group } from '@mantine/core';
import { LoginForm } from './Login.form';

const meta: Meta<typeof LoginForm> = {
  title: 'components/Forms/LoginForm',
  component: LoginForm,
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
type Story = StoryObj<typeof LoginForm>;

export const DefaultRegister: Story = {
  render: () => (
    <>
      <LoginForm />
    </>
  ),
};
