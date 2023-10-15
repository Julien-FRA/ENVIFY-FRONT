'use client';
import { Select } from '@/components/Select';
import { PackageVersionDto } from '@/utils/types/package.type';
import { useMemo } from 'react';

export const PackageVersionSelect = ({
  versions,
  selectedVersion,
  handleVersion,
}: {
  versions: PackageVersionDto[];
  selectedVersion?: number | null;
  handleVersion: (versionValue: number | null, label?: string) => void;
}) => {
  const parseVersionsOption = useMemo(
    () =>
      versions.map((version) => ({
        value: `${version.id}`,
        label: `${version.versionNumber}`,
      })),
    [versions]
  );

  const handleChange = (value: string | null) => {
    const label = parseVersionsOption?.find(
      (version) => version.value === value
    )?.label;

    handleVersion(Number(value), label);
  };

  return (
    <Select
      placeholder="Select à version *"
      variant="unstyled"
      required
      data={parseVersionsOption}
      value={String(selectedVersion)}
      onChange={handleChange}
    />
  );
};
