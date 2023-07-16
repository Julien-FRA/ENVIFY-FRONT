'use client';
import React from 'react';
import { TextInput } from '@mantine/core';
import { InputTextProps } from '@/utils/types/component.type';

function InputText({
  placeholder,
  label,
  description,
  required,
}: InputTextProps) {
  return (
    <TextInput
      placeholder={placeholder}
      label={label}
      description={description}
      withAsterisk={required}
    />
  );
}

export default InputText;
