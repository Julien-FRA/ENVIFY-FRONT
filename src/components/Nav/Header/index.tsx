'use client';
import React from 'react';
import { Flex } from '@mantine/core';
import { Button } from '../../Button';
import { useSession } from 'next-auth/react';
import { EnvifyLogoButtno } from '@/components/Button/Logo.button';

export const Header = () => {
  const { data: session } = useSession();

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
      <EnvifyLogoButtno />
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
