import React from 'react';
import { Flex } from '@mantine/core';
import { Button } from '../../Button';
import { getAuthSession } from '@/utils/authOptions';
import { EnvifyLogoButton } from '@/components/Button/Logo.button';

export const Header = async () => {
  const session = await getAuthSession();
  return (
    <Flex
      style={{
        borderBottom: `1px solid var(--mantine-color-dark-4)`,
      }}
      justify="space-between"
      align="center"
      p="md"
      h={80}
      w="100%"
    >
      <EnvifyLogoButton />
      <Flex>
        {session ? (
          <Button variant="outline" href="/dashboard">
            Dashboard
          </Button>
        ) : (
          <>
            <Button variant="outline" href="/login" mr={16}>
              Login
            </Button>
            <Button href="/register">Get started</Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};
