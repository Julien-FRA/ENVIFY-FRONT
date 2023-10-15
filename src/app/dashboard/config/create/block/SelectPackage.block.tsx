'use client';
import { CheckboxCard } from '@/components/Card/CheckboxCard';
import { Grid, GridCol } from '@mantine/core';
import { useConfigFormContext } from '../configForm.context';
import { getPackages } from '@/utils/api/package.api';
import { useQuery } from 'react-query';
import { useCallback } from 'react';
import { PackageDto } from '@/utils/types/package.type';
import { ConfigError } from './ConfigError.block';
import { Loader } from '@/components/Loader';

export type PackageVersion = {
  versionId: number | null;
  versionNumber?: string;
};

export type HandleVersion = (
  packageId: number,
  name: string,
  packageVersion: PackageVersion | null,
  checked: boolean
) => void;

export const SelectPackage = () => {
  const { isLoading, data: packages } = useQuery('packages', getPackages);

  const form = useConfigFormContext();

  const handleChange: HandleVersion = useCallback(
    (packageId, name, packageVersion, checked) => {
      const index = form.values.packages.findIndex(
        (val) => val.packageId === packageId
      );

      if (!checked || !packageVersion)
        return form.removeListItem('packages', index);

      if (index === -1)
        return form.insertListItem('packages', {
          name,
          packageId,
          versionId: Number(packageVersion.versionId),
          versionNumber: packageVersion.versionNumber,
          packageProperties: [],
        });

      form.setFieldValue(
        `packages.${index}.versionId`,
        Number(packageVersion.versionId)
      );
      form.setFieldValue(
        `packages.${index}.versionNumber`,
        packageVersion.versionNumber
      );
      return;
    },
    [form]
  );

  if (isLoading) return <Loader />;

  if (!packages || !packages.length) return <ConfigError />;

  return <GridSelectPackage packages={packages} handleChange={handleChange} />;
};

type GridSelectPackageProps = {
  packages: PackageDto[];
  handleChange: HandleVersion;
};

const GridSelectPackage = ({
  packages,
  handleChange,
}: GridSelectPackageProps) => {
  return (
    <Grid>
      {packages.map((pkg) => (
        <GridCol span={4} key={pkg.id}>
          <CheckboxCard
            packageId={pkg.id}
            name={pkg.name}
            // todo: remove used image url
            image="https://cdn.iconscout.com/icon/free/png-256/certbot-1175037.png"
            versions={pkg.packageVersions}
            onChange={handleChange}
          />
        </GridCol>
      ))}
    </Grid>
  );
};
