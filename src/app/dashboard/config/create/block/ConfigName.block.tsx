'use client';
import { SimpleGrid, TextInput } from '@mantine/core';
import { useConfigFormContext } from '../configForm.context';
import { OperatingSystemSelect } from '@/components/Select/OperatingSystem.select';
import { OperatingSystemVersionSelect } from '@/components/Select/OperatingSystemVersion.select';
import { useEffect } from 'react';

export const ConfigNameBlock = (): JSX.Element => {
  const form = useConfigFormContext();
  const operatingSystemId = form.values.operatingSystem.id;

  useEffect(() => {
    // Si operatingSystemId change, mettre à jour operatingSystem.versionId à null
    form.setFieldValue('operatingSystem.versionId', null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operatingSystemId]);

  return (
    <SimpleGrid>
      <TextInput
        placeholder="Enter a config name"
        label="Config name"
        name="name"
        required
        {...form.getInputProps('configName')}
      />
      <SimpleGrid cols={2}>
        <OperatingSystemSelect
          required
          {...form.getInputProps('operatingSystem.id')}
        />
        <OperatingSystemVersionSelect
          operatingSystemId={operatingSystemId}
          required
          {...form.getInputProps('operatingSystem.versionId')}
        />
      </SimpleGrid>
    </SimpleGrid>
  );
};
