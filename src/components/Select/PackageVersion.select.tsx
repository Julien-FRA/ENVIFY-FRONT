'use client';
import { Select } from '@/components/Select';
import { getPackageVersions } from '@/utils/api/package.api';
import { useQuery } from 'react-query';

const getVersionsByIdOptions = (packageId: number) =>
  getPackageVersions(packageId).then((versions) =>
    versions.map((version) => ({
      value: `${version.id}`,
      label: `${version.versionNumber}`,
    }))
  );

export const PackageVersionSelect = ({
  packageId,
  selectedVersion,
  handleVersion,
}: {
  packageId: number;
  selectedVersion: string | null;
  handleVersion: (versionValue: string) => void;
}) => {
  const { data: versionOptions } = useQuery(
    ['packageVersionOptions', packageId],
    () => getVersionsByIdOptions(packageId)
  );

  return (
    <Select
      placeholder="Select à version *"
      variant="unstyled"
      required
      data={versionOptions}
      value={selectedVersion}
      onChange={handleVersion}
    />
  );
};
