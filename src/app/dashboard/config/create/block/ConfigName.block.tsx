'use client';
import { SimpleGrid, TextInput } from '@mantine/core';
import { useConfigFormContext } from '../configForm.context';
import { OperatingSystemSelect } from '@/components/Select/OperatingSystem.select';
import { OperatingSystemVersionSelect } from '@/components/Select/OperatingSystemVersion.select';
import { useEffect } from 'react';

export const ConfigNameBlock = (): JSX.Element => {
  const form = useConfigFormContext();
  const operatingSystemId = form.values.os.versionId;

  useEffect(() => {
    // Si operatingSystemId change, mettre à jour operatingSystem.versionNumber à null
    form.setFieldValue('os.versionNumber', null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operatingSystemId]);

  return (
    <SimpleGrid>
      <TextInput
        placeholder="Enter a config name"
        label="Config name"
        name="name"
        required
        {...form.getInputProps('name')}
      />
      <TextInput
        placeholder="Enter a config description"
        label="Config description"
        name="name"
        multiline
        {...form.getInputProps('description')}
      />
      <SimpleGrid cols={2}>
        <OperatingSystemSelect required />
        <OperatingSystemVersionSelect
          operatingSystemId={operatingSystemId}
          {...form.getInputProps('os.versionNumber')}
          required
        />
      </SimpleGrid>
    </SimpleGrid>
  );
};
