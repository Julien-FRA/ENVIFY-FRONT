'use client';
import { useConfigFormContext } from '../configForm.context';
import { getPackagePropertiesByPackagesId } from '@/utils/api/package.api';
import { useMutation } from 'react-query';
import { BlockProperties } from '@/components/BlockProperties';
import { useEffect } from 'react';
import { Box, Title } from '@mantine/core';
import { Loader } from '@/components/Loader';
import {
  PackagePropertiesDto,
  PackagePropertiesPackagesId,
} from '@/utils/types/package.type';
import { CodeContainer } from '@/components/Container/Code.container';

export const ConfigProperties = () => {
  const {
    isLoading,
    data: packagePropertiesData,
    mutateAsync,
  } = useMutation((data: PackagePropertiesPackagesId) =>
    getPackagePropertiesByPackagesId(data)
  );

  const form = useConfigFormContext();
  const packages = form.values.packages;

  useEffect(() => {
    const packagesVersionIds = packages.map((pck) => pck.versionId);

    const resetFormPackageProperty = (
      packagePropertiesData: PackagePropertiesDto[]
    ) => {
      packagePropertiesData.forEach((packageProperty) => {
        const index = packages.findIndex(
          (pck) => pck.versionId === packageProperty.packageVersionId
        );

        if (index < 0) return;

        form.setFieldValue(
          `packages.${index}.packageProperties`,
          JSON.parse(packageProperty.properties)
        );
      });
    };

    mutateAsync(
      { packageVersionIds: packagesVersionIds },
      { onSuccess: resetFormPackageProperty }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutateAsync]);

  if (isLoading || !packagePropertiesData) return <Loader />;

  return (
    <Box>
      {form.values.packages.map((pck, pckIndex) => (
        <CodeContainer key={`${pck.name}-${pckIndex}`}>
          {pck.packageProperties.length > 0 ? (
            <Box>
              <Title order={3}>Configure {pck.name} :</Title>
              <BlockProperties
                description={packagePropertiesData[pckIndex].description}
                packagePropeties={pck.packageProperties}
                packageIndex={pckIndex}
              />
            </Box>
          ) : (
            <EmptyBlockProperties name={pck.name} />
          )}
        </CodeContainer>
      ))}
    </Box>
  );
};

const EmptyBlockProperties = ({ name }: { name: string }) => (
  <Box>
    Vous n'avez pas de configurations supplémentaires pour {name}. Veuillez
    continuer.
  </Box>
);
