import type { StoryObj, Meta } from '@storybook/react';
import { Button } from '.';
import { Group } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'components/Buttons/Button',
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
    variant: {
      control: { type: 'string' }, // Automatically inferred when 'options' is defined
      description: `Type of button. Type : string`,
    },
    href: {
      control: { type: 'string' }, // Automatically inferred when 'options' is defined
      description: `Link of button. Type : string`,
    },
    disabled: {
      control: { type: 'boolean' },
      description: `Button is disabled ?. Type : Boolean`,
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

export const Disabled: Story = {
  render: (args) => (
    <>
      <Button disabled={true} {...args} />
      <Button variant="outline" disabled={true} {...args} />
      <Button
        variant="arrow"
        disabled={true}
        rightSection={<BsArrowRight />}
        {...args}
      />
    </>
  ),
};

export const Link: Story = {
  render: (args) => (
    <>
      <Button href="/" {...args} />
      <Button variant="outline" href="/" {...args} />
      <Button variant="arrow" rightSection={<BsArrowRight />} {...args} />
    </>
  ),
};
