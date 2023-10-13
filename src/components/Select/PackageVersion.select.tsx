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
  selectedVersion: string | null;
  handleVersion: (versionValue: string) => void;
}) => {
  const parseVersionsOption = useMemo(
    () =>
      versions.map((version) => ({
        value: `${version.id}`,
        label: `${version.versionNumber}`,
      })),
    [versions]
  );

  return (
    <Select
      placeholder="Select à version *"
      variant="unstyled"
      required
      data={parseVersionsOption}
      value={selectedVersion}
      onChange={handleVersion}
    />
  );
};
