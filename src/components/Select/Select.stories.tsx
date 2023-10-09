import type { StoryObj, Meta } from '@storybook/react';
import { Select } from '@mantine/core';
import React from 'react';

const meta: Meta<typeof Select> = {
  title: 'components/Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    data: {
      control: { type: 'string' },
      description: `Data in select component. Type : string`,
    },
    placeholder: {
      control: { type: 'string' },
      description: `Text inside the field. Type : string`,
    },
  },
  decorators: [(Story) => <Story />],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <>
      <Select data={['10.1', '12', '14.4']} placeholder="Select version" />
    </>
  ),
};
