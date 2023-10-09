import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Sidebar } from '.';
import { AppShell, Group } from '@mantine/core';

const meta: Meta<typeof Sidebar> = {
  title: 'components/Navs/Sidebar',
  component: Sidebar,
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
      <Group h="30rem">
        <AppShell navbar={{ width: 250, breakpoint: 'sm' }}>
          <Story />
        </AppShell>
      </Group>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <>
      <Sidebar />
    </>
  ),
};
