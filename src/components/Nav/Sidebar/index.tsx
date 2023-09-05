'use client';
import React from 'react';
import { Navbar as MantineNavbar } from '@mantine/core';

export const Navbar = () => {
  return (
    <>
      <MantineNavbar fixed width={{ sm: 300 }}>
        <MantineNavbar.Section>
          <p>something</p>
        </MantineNavbar.Section>
      </MantineNavbar>
    </>
  );
};
