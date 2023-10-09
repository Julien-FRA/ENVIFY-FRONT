'use client';
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
  const { data: versionOptions } = useQuery(
    ['operatingSystemOptions'],
    getVersionsByIdOptions
  );

  return (
    <Select
      label="Your Os"
      placeholder="Select à Os"
      data={versionOptions}
      {...props}
    />
  );
};
