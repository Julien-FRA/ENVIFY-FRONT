import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { ConfigCard } from '.';
import { Group } from '@mantine/core';

const meta: Meta<typeof ConfigCard> = {
  title: 'components/Cards/ConfigCard',
  component: ConfigCard,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    config: {
      description: `An object with different data. Package: Name, Alias, Version, Logo`,
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
type Story = StoryObj<typeof ConfigCard>;

export const Default: Story = {
  render: () => (
    <>
      <ConfigCard
        config={{
          id: 0,
          name: 'MyConfig',
          created_at: '',
          packages: [
            {
              name: 'Node',
              alias: 'node',
              version: ['18.0.0'],
              logo: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
            },
            {
              name: 'Docker',
              alias: 'docker',
              version: ['23.0.3'],
              logo: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png',
            },
            {
              name: 'Maria DB',
              alias: 'mariadb',
              version: ['8.0.0'],
              logo: 'https://cdn.iconscout.com/icon/free/png-256/mariadb-226029.png',
            },
          ],
          scripts: [
            {
              comment: 'install node',
              script: 'sudo apt install nodejs',
            },
            {
              comment: 'install npm',
              script: 'sudo apt install npm',
            },
          ],
        }}
      />
    </>
  ),
};

export const WithOnePackage: Story = {
  render: () => (
    <>
      <ConfigCard
        config={{
          id: 0,
          name: 'MyConfig',
          created_at: '',
          packages: [
            {
              name: 'Node',
              alias: 'node',
              version: ['18.0.0'],
              logo: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
            },
          ],
          scripts: [
            {
              comment: 'install node',
              script: 'sudo apt install nodejs',
            },
            {
              comment: 'install npm',
              script: 'sudo apt install npm',
            },
          ],
        }}
      />
    </>
  ),
};
