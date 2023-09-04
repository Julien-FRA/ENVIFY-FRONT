'use client';
import React from 'react';
import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps as MantinePasswordInputProps,
} from '@mantine/core';

// extending type
type PasswordInputProps = {
  test?: string;
} & MantinePasswordInputProps;

export const PasswordInput = (props: PasswordInputProps) => (
  <MantinePasswordInput {...props} />
);
