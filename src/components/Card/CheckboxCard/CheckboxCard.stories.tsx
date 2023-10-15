import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { CheckboxCard } from '.';
import { Group, SimpleGrid } from '@mantine/core';
import {
  HandleVersion,
  PackageVersion,
} from '@/app/dashboard/config/create/block/SelectPackage.block';

const meta: Meta<typeof CheckboxCard> = {
  title: 'components/Cards/CheckboxCard',
  component: CheckboxCard,
  tags: ['autodocs'],
  args: {
    versions: [
      {
        id: 21,
        versionNumber: '21',
        url: 'https://www.java.com/releases/',
        versionStatusId: 1,
        packageId: 10,
      },
      {
        id: 22,
        versionNumber: '20',
        url: 'https://www.java.com/releases/',
        versionStatusId: 1,
        packageId: 10,
      },
      {
        id: 23,
        versionNumber: '19',
        url: 'https://www.java.com/releases/',
        versionStatusId: 1,
        packageId: 10,
      },
      {
        id: 24,
        versionNumber: '18',
        url: 'https://www.java.com/releases/',
        versionStatusId: 1,
        packageId: 10,
      },
      {
        id: 25,
        versionNumber: '17',
        url: 'https://www.java.com/releases/',
        versionStatusId: 1,
        packageId: 10,
      },
    ],
  },
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    name: {
      description: `Title of card.`,
    },
    onChange: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Group>
          <SimpleGrid>
            <Story />
          </SimpleGrid>
        </Group>
      );
    },
  ],
};
export default meta;
type Story = StoryObj<typeof CheckboxCard>;

export const Default: Story = {
  render: function Render(args) {
    const { value, handleChange } = useCheckboxOnChange();

    return (
      <>
        <CheckboxCard
          versions={args.versions}
          packageId={1}
          name={'Nodejs'}
          onChange={handleChange}
        />

        <DisplayValue value={value} />
      </>
    );
  },
};

export const WithoutImage: Story = {
  render: function Render(args) {
    const { value, handleChange } = useCheckboxOnChange();

    return (
      <>
        <CheckboxCard
          versions={args.versions}
          packageId={1}
          name={'Nodejs'}
          onChange={handleChange}
        />
        <DisplayValue value={value} />
      </>
    );
  },
};

export const WithoutVersion: Story = {
  render: function Render(args) {
    const { value, handleChange } = useCheckboxOnChange();

    return (
      <>
        <CheckboxCard
          versions={args.versions}
          name={'Nodejs'}
          packageId={1}
          onChange={handleChange}
        />
        <DisplayValue value={value} />
      </>
    );
  },
};

type CardCheckBoxOnChange = {
  packageId: number;
  name: string;
  packageVersion: PackageVersion | null;
  checked: boolean;
};

const DisplayValue = ({
  value,
}: {
  value: CardCheckBoxOnChange | undefined;
}) => {
  return (
    <pre style={{ marginTop: 10, color: 'black' }}>
      {JSON.stringify({ value }, null, 2)}
    </pre>
  );
};

const useCheckboxOnChange = () => {
  const [value, setValue] = useState<CardCheckBoxOnChange | undefined>();

  const handleChange: HandleVersion = (
    packageId,
    name,
    packageVersion,
    checked
  ) => {
    setValue({
      packageId,
      name,
      packageVersion,
      checked,
    });
  };

  return {
    value,
    handleChange,
  };
};
