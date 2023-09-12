import React from 'react';
import { Flex, Box } from '@mantine/core';
import { Button, ButtonIcon } from '../../Button';
import { GiHexagonalNut } from 'react-icons/gi';

export const Header = () => {
  return (
    <Flex
      style={{
        borderBottom: `1px solid var(--mantine-color-dark-4)`,
      }}
      justify="space-between"
      align="center"
      p="md"
      h={80}
    >
      <ButtonIcon>
        <GiHexagonalNut size={24} />
      </ButtonIcon>
      <Flex>
        <Box mr="1rem">
          <Button variant="outline" href="/login">
            Login
          </Button>
        </Box>
        <Button href="/register">Get started</Button>
      </Flex>
    </Flex>
  );
};
