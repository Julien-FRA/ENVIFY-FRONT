'use client';
import React from 'react';
import { PasswordInput } from '@mantine/core';
import { InputTextProps } from '@/utils/types/component.type';

function InputPassword({
  placeholder,
  label,
  description,
  required,
}: InputTextProps) {
  return (
    <PasswordInput
      placeholder={placeholder}
      label={label}
      description={description}
      withAsterisk={required}
    />
  );
}

export default InputPassword;
