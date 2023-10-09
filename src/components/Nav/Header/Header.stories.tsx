import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Header } from '.';
import { Group } from '@mantine/core';

const meta: Meta<typeof Header> = {
  title: 'components/Navs/Header',
  component: Header,
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
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <>
      <Header />
    </>
  ),
};
