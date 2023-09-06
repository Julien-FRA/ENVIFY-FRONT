import { ButtonPrimary, ButtonSecondary } from '../Button/Button';
import React from 'react';

export const VerticalNav = () => {
  return (
    <nav>
      <ButtonSecondary href={'/'}>Landing</ButtonSecondary>
      <ButtonPrimary href={'/home'}>Home</ButtonPrimary>
      <ButtonPrimary href={'/login'}>Login</ButtonPrimary>
      <ButtonPrimary href={'/register'}>Register</ButtonPrimary>
    </nav>
  );
};
