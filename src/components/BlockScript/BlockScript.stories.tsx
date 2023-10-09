import type { StoryObj, Meta } from '@storybook/react';
import { BlockScript } from '.';
import React from 'react';

const meta: Meta<typeof BlockScript> = {
  title: 'components/BlockScript',
  component: BlockScript,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    comment: {
      control: { type: 'string' },
      description: `Text for comment bloc. Type : string`,
    },
    code: {
      control: { type: 'string' },
      description: `Script generate. Type : string`,
    },
  },
  decorators: [(Story) => <Story />],
};
export default meta;
type Story = StoryObj<typeof BlockScript>;

export const Default: Story = {
  render: () => <BlockScript comment="Nodejs" code="npm instal node" />,
};

export const WithoutComment: Story = {
  render: () => <BlockScript code={'npm instal node'} />,
};

export const LongCode: Story = {
  render: () => (
    <BlockScript
      comment="Docker"
      code={`$ docker -o ../docker_gh-pages -c atelier-cave.light -s yes -I -u -x node_modules -w --extras fileSearch
    `}
    />
  ),
};

export const LongComment: Story = {
  render: () => (
    <BlockScript
      comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      code={`$ docker -o ../docker_gh-pages -c atelier-cave.light -s yes -I -u -x node_modules -w --extras fileSearch
      `}
    />
  ),
};
