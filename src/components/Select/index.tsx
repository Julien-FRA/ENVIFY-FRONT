'use client';
import {
  Select as MantineSelect,
  SelectProps as MantineSelectProps,
} from '@mantine/core';

export type SelectProps = MantineSelectProps;

export const Select = (props: SelectProps): JSX.Element => {
  return (
    <MantineSelect
      withCheckIcon={false}
      searchable
      nothingFoundMessage="Nothing found..."
      {...props}
    />
  );
};
