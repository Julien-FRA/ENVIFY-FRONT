import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { CheckboxCard } from '.';
import { Group, SimpleGrid } from '@mantine/core';

const meta: Meta<typeof CheckboxCard> = {
  title: 'components/Cards/CheckboxCard',
  component: CheckboxCard,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    title: {
      description: `Title of card.`,
    },
    onChange: {
      control: {
        disable: true,
      },
    },
    image: {
      description: `Image linked to the package.`,
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
  render: function Render() {
    const { value, handleChange } = useCheckboxOnChange();

    return (
      <>
        <CheckboxCard
          packageId={1}
          title={'Nodejs'}
          image={'https://nodejs.org/static/images/logo.svg'}
          onChange={handleChange}
        />

        <DisplayValue value={value} />
      </>
    );
  },
};

export const WithoutImage: Story = {
  render: function Render() {
    const { value, handleChange } = useCheckboxOnChange();

    return (
      <>
        <CheckboxCard
          packageId={1}
          title={'Nodejs'}
          image={''}
          onChange={handleChange}
        />
        <DisplayValue value={value} />
      </>
    );
  },
};

export const WithoutVersion: Story = {
  render: function Render() {
    const { value, handleChange } = useCheckboxOnChange();

    return (
      <>
        <CheckboxCard title={'Nodejs'} packageId={1} onChange={handleChange} />
        <DisplayValue value={value} />
      </>
    );
  },
};

type CardCheckBoxOnChange = {
  packageName: string;
  packageVersion: string | null;
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

  const handleChange = (
    packageName: string,
    packageVersion: string | null,
    checked: boolean
  ) => {
    setValue({
      packageName: packageName,
      packageVersion: packageVersion,
      checked: checked,
    });
  };

  return {
    value,
    handleChange,
  };
};
