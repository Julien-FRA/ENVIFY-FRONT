import type { StoryObj, Meta } from '@storybook/react';
import { TextInput } from '@mantine/core';
import React from 'react';

const meta: Meta<typeof TextInput> = {
  title: 'components/Inputs/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'string' },
      description: `Text inside the field. Type : string`,
    },
    label: {
      control: { type: 'string' },
      description: `Text above the field. Type : string`,
    },
    name: {
      control: { type: 'string' },
      description: `Name value for the field. Type : string`,
    },
    required: {
      control: { type: 'string' },
      description: `Input is required ?. Type : Boolean`,
    },
    disabled: {
      control: { type: 'string' },
      description: `Input is disabled ?. Type : Boolean`,
    },
  },
  decorators: [(Story) => <Story />],
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: () => (
    <>
      <TextInput
        placeholder="Your email"
        label="Email"
        name="email"
        required={false}
      />
    </>
  ),
};

export const Required: Story = {
  render: () => (
    <>
      <TextInput
        placeholder="Your email"
        label="Email"
        name="email"
        required={true}
      />
    </>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      <TextInput
        placeholder="Your email"
        label="Email"
        name="email"
        required={false}
        disabled={true}
      />
    </>
  ),
};
