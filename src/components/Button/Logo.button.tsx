import React from 'react';
import { EnvifyLogo } from '@/components/Icons/logo';
import { ButtonIcon } from '.';
import { Text } from '@mantine/core';
import { BsArrowLeft } from 'react-icons/bs';

type Props = {
  back?: boolean;
};

export const EnvifyLogoButton = ({ back }: Props) => (
  <ButtonIcon leftSection={back && <BsArrowLeft />}>
    <EnvifyLogo />
    <Text size="lg" pt={3} pl={3}>
      Envify
    </Text>
  </ButtonIcon>
);
