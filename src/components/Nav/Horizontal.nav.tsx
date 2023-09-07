'use client';
import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import { Button, ButtonLogo } from '../Button/Button';

export const HorizontalNav = () => {
  return (
    <CustomNav>
      <ButtonLogo />
      <Box display="flex">
        <Box mr="1rem">
          <Button outlined href="/login">
            Login
          </Button>
        </Box>
        <Button href="/register">Register</Button>
      </Box>
    </CustomNav>
  );
};

const CustomNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border-bottom: 1px solid #353535;
  padding: 1.5rem;
`;
