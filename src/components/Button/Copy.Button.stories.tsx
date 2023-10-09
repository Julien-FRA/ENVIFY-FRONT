import type { StoryObj, Meta } from '@storybook/react';
import { ButtonCopy } from './Copy.Button';
import { Group } from '@mantine/core';
import React from 'react';

const meta: Meta<typeof ButtonCopy> = {
  title: 'components/Buttons/ButtonCopy',
  component: ButtonCopy,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    value: {
      control: { type: 'string' }, // Automatically inferred when 'options' is defined
      description: `Value who is copy for this button. Type : string`,
    },
  },
  decorators: [
    (Story) => (
      <Group>
        <Story />
      </Group>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ButtonCopy>;

export const Default: Story = {
  render: () => (
    <>
      <ButtonCopy value="value" />
    </>
  ),
};
