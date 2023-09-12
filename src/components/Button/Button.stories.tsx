import type { StoryObj, Meta } from '@storybook/react';
import { Button } from '.';
import { Group } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    color: {
      control: { type: 'string' }, // Automatically inferred when 'options' is defined
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
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => (
    <>
      <Button {...args} />
      <Button variant="outline" {...args} />
      <Button variant="arrow" rightSection={<BsArrowRight />} {...args} />
    </>
  ),
};

export const Hovered: Story = {
  ...Default,
  parameters: {
    pseudo: { hover: true },
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
  },
};
