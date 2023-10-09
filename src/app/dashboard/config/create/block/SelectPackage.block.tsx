'use client';
import { CheckboxCard } from '@/components/Card/CheckboxCard';
import { Grid, GridCol } from '@mantine/core';
import { useConfigFormContext } from '../configForm.context';
import { getPackages } from '@/utils/api/package.api';
import { useQuery } from 'react-query';
import { useCallback } from 'react';
import { PackageDto } from '@/utils/types/package.type';
import { ConfigError } from './ConfigError.block';

export const SelectPackage = () => {
  const { data: packages } = useQuery('packages', getPackages);

  const form = useConfigFormContext();

  const handleChange = useCallback(
    (packageName: string, packageVersion: string | null, checked: boolean) => {
      const index = form.values.packages.findIndex(
        (val) => val.name === packageName
      );

      if (!checked || !packageVersion)
        return form.removeListItem('packages', index);

      if (index === -1)
        return form.insertListItem('packages', {
          name: packageName,
          version: packageVersion,
        });
      return form.setFieldValue(`packages.${index}.version`, packageVersion);
    },
    [form]
  );

  if (!packages || !packages.length) return <ConfigError />;
  return <GridSelectPackage packages={packages} handleChange={handleChange} />;
};

type GridSelectPackageProps = {
  packages: PackageDto[];
  handleChange: (
    packageName: string,
    packageVersion: string | null,
    checked: boolean
  ) => void;
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
            title={pkg.name}
            // todo: remove used image url
            image="https://cdn.iconscout.com/icon/free/png-256/certbot-1175037.png"
            onChange={handleChange}
          />
        </GridCol>
      ))}
    </Grid>
  );
};
