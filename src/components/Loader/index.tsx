import { Flex, Loader as Loading } from '@mantine/core';
import React from 'react';

export const Loader = () => {
  return (
    <Flex w="100%" justify="center" mt={'xl'}>
      <Loading type="dots" />
    </Flex>
  );
};
