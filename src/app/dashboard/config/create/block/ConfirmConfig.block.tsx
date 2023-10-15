import { Center, Text } from '@mantine/core';
import { useConfigFormContext } from '../configForm.context';
import { useEffect } from 'react';

export const ConfirmConfig = (): JSX.Element => {
  const form = useConfigFormContext();

  useEffect(() => {
    const initializeFormValues = () => {
      form.values.packages.map((pck, pckIndex) => {
        pck.packageProperties.map((property, propertyIndex) => {
          if (property.type === 'multiple') {
            form.setFieldValue(
              `packages.${pckIndex}.packageProperties.${propertyIndex}.values`,
              property.values.flatMap((v) => v)
            );
          }
        });
      });
    };
    initializeFormValues();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Center h={150}>
      <Text size="1.5rem" c="white">
        The configuration is ready to be generated, confirm to display the
        result
      </Text>
    </Center>
  );
};
