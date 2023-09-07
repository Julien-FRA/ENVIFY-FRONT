import { Button } from '../Button/Button';
import React from 'react';

export const VerticalNav = () => {
  return (
    <nav>
      <Button outlined href="/">
        Landing
      </Button>
      <Button href="/home">Home</Button>
      <Button href="/login">Login</Button>
      <Button href="/register">Register</Button>
    </nav>
  );
};
