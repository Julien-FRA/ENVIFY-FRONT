'use client';
import { useConfigFormContext } from '../configForm.context';
import { getPackageProperties } from '@/utils/api/package.api';
import { useQuery } from 'react-query';
import { BlockProperties } from '@/components/BlockProperties';
import { useEffect } from 'react';
import { Box } from '@mantine/core';
import { Loader } from '@/components/Loader';

export const ConfigProperties = () => {
  const { isLoading, data: packageProperties } = useQuery(
    'packageProperties',
    getPackageProperties
  );

  const form = useConfigFormContext();

  useEffect(() => {
    const filterPackageProperties = () => {
      if (!packageProperties) return [];
      const packageVersionsId = form.values.packages.map(
        (pck) => pck.packageVersions.id
      );

      return packageProperties
        .filter((properties) =>
          packageVersionsId.includes(properties.packageVersionId)
        )
        .map((packageProperties) => ({
          packageVersionId: packageProperties.packageVersionId,
          properties: JSON.parse(packageProperties.properties),
          packageName: form.values.packages.find(
            (pck) =>
              pck.packageVersions.id === packageProperties.packageVersionId
          )?.name as string,
        }));
    };

    const selectedPackageProperties = filterPackageProperties();

    form.setFieldValue('packagesProperties', selectedPackageProperties);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageProperties]);

  if (isLoading) return <Loader />;

  return (
    <>
      {form.values.packagesProperties.length > 0 ? (
        form.values.packagesProperties.map((item, index) => (
          <BlockProperties
            key={`${index}-${item.packageName}`}
            packagePropertyIndex={index}
            packageProperty={item}
          />
        ))
      ) : (
        <EmptyBlockProperties />
      )}
    </>
  );
};

const EmptyBlockProperties = () => {
  return (
    <Box>
      Vous n'avez pas de configurations supplémentaires. Veuillez continuer pour
      la génération du script.
    </Box>
  );
};
