'use client';
import Link from 'next/link';
import classes from './Sidebar.module.css';
import { AppShellNavbar, Flex, Text } from '@mantine/core';
import { Button } from '@/components/Button';
import { signOut } from 'next-auth/react';

const links = [
  { name: 'My Configs', href: '/dashboard/config/all' },
  { name: 'Create a Config', href: '/dashboard/config/create' },
  {
    name: 'Suggested configs',
    href: '/dashboard/suggested-config/all',
  },
];

export const Sidebar = () => {
  const getBack = () =>
    signOut({
      callbackUrl: '/',
    });

  const reloadIfPathMatches = (href: string) =>
    window.location.pathname === href && window.location.reload();

  return (
    <AppShellNavbar className={classes.navbar} bg="dark.6" withBorder>
      <Flex direction="column">
        <Text component={Link} href="/dashboard" c="white" mb={56} px="xs">
          Dashboard
        </Text>
        <Text component="p" c="dark.3" px="xs">
          Configurations
        </Text>
        {links.map((link) => (
          <Link
            key={link.name}
            onClick={() => reloadIfPathMatches(link.href)}
            href={link.href}
          >
            <Text p="xs" className={classes.link}>
              {link.name}
            </Text>
          </Link>
        ))}
      </Flex>
      <Button variant="outline" onClick={getBack}>
        Logout
      </Button>
    </AppShellNavbar>
  );
};
