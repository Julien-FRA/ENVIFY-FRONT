'use client';
import { useConfigFormContext } from '@/app/dashboard/config/create/configForm.context';
import { Select, SelectProps } from '@/components/Select';
import { getOperatingSystem } from '@/utils/api/operatingSystem.api';
import { useQuery } from 'react-query';

const getVersionsByIdOptions = () =>
  getOperatingSystem().then((versions) =>
    versions.map((version) => ({
      value: `${version.id}`,
      label: `${version.name}`,
    }))
  );

export const OperatingSystemSelect = (props: SelectProps) => {
  const form = useConfigFormContext();

  const { data: versionOptions } = useQuery(
    ['operatingSystemOptions'],
    getVersionsByIdOptions
  );

  const handleChange = (value: string | null) => {
    const label = versionOptions?.find((version) => version.value === value)
      ?.label;

    form.setFieldValue('os.versionId', Number(value));
    form.setFieldValue('os.name', label);
  };

  return (
    <Select
      label="Your Os"
      placeholder="Select à Os"
      data={versionOptions}
      onChange={handleChange}
      {...props}
    />
  );
};
