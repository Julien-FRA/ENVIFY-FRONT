import React from 'react';
import { Button } from '../Button/Button';
import { BsArrowRight } from 'react-icons/bs';

export const HeaderVertical = () => {
  return (
    <>
      <Button outlined href={'/'}>
        Landing
      </Button>
      <Button href={'/home'}>Home</Button>
      <Button href={'/login'}>Login</Button>
      <Button href={'/register'}>Register</Button>
      <Button rightIcon={<BsArrowRight />} href="/">
        Arrow button
      </Button>
    </>
  );
};
