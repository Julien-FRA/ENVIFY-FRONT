import React from 'react';
import PrimaryPutton from '../Button/Primary.button';
import OutlineButton from '../Button/Outline.button';
import ArrowButton from '../Button/Arrow.button';

const HeaderVertical = () => {
  return (
    <nav>
      <OutlineButton href={'/'}>Landing</OutlineButton>
      <PrimaryPutton href={'/home'}>Home</PrimaryPutton>
      <PrimaryPutton href={'/login'}>Login</PrimaryPutton>
      <PrimaryPutton href={'/register'}>Register</PrimaryPutton>
      <ArrowButton href={''}>Arrow button</ArrowButton>
    </nav>
  );
};

export default HeaderVertical;
