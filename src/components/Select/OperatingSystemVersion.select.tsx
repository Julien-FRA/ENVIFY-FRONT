'use client';
import { Select, SelectProps } from '@/components/Select';
import { getOperatingSystemVersions } from '@/utils/api/operatingSystem.api';
import { useQuery } from 'react-query';

type OperatingSystemVersionProps = {
  operatingSystemId: number;
} & SelectProps;

const getVersionsByIdOptions = (operatingSystemId: number) =>
  getOperatingSystemVersions(operatingSystemId).then((versions) =>
    versions.map((version) => ({
      value: version.versionNumber,
      label: version.versionNumber,
    }))
  );

export const OperatingSystemVersionSelect = ({
  operatingSystemId,
  ...props
}: OperatingSystemVersionProps) => {
  const { data: versionOptions } = useQuery(
    ['operatingSystemVersionOptions', operatingSystemId],
    () => getVersionsByIdOptions(operatingSystemId)
  );

  return (
    <Select
      label="Your Os Version"
      placeholder="Select à Os version"
      data={versionOptions}
      {...props}
    />
  );
};
