import Link from 'next/link';
import classes from './Sidebar.module.css';
import { AppShellNavbar, Text } from '@mantine/core';

export const Sidebar = () => {
  const links = [
    { name: 'My Configs', href: '/dashboard/config/all' },
    {
      name: 'Suggested configs',
      href: '/dashboard/suggested-config/all',
    },
  ];

  return (
    <AppShellNavbar className={classes.navbar} bg="dark.6" withBorder>
      <Text component={Link} href="/dashboard" c="white" mb={56} px="xs">
        Dashboard
      </Text>
      <Text component="p" c="dark.3" px="xs">
        Configurations
      </Text>
      {links.map((link) => (
        <Text
          key={link.name}
          component={Link}
          p="xs"
          href={link.href}
          className={classes.link}
        >
          {link.name}
        </Text>
      ))}
    </AppShellNavbar>
  );
};
