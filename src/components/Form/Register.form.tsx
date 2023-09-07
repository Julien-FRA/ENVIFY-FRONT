'use client';
import React from 'react';
import { useForm } from '@mantine/form';
import {
  Box,
  Button,
  Container,
  Text,
  TextInput,
  Title,
  PasswordInput,
} from '@/components/mantine';
import { UserCreateDto } from '@/utils/types/user.type';

export const RegisterForm = () => {
  const form = useForm<UserCreateDto>({
    initialValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    clearInputErrorOnChange: true,

    validate: {
      username: (value) =>
        value.length >= 1 ? null : 'Username must be at least 1 characters',
      firstname: (value) =>
        value.length >= 1 ? null : 'First name must be at least 1 characters',
      lastname: (value) =>
        value.length >= 1 ? null : 'Last name must be at least 1 characters',
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)
          ? null
          : 'Password must include at least one letter, number and special character',
      confirmPassword: (value, values) =>
        value !== values.password ? `Your passwords don't match` : null,
    },
  });

  return (
    <Container size="sm" p={'2rem'} my={'2rem'}>
      <Title order={1} size={'2.5rem'} mb={'0.5rem'}>
        Get Started
      </Title>
      <Text size="md" mb={'2rem'}>
        Create a new account
      </Text>

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Box mb="0.75rem">
          <TextInput
            placeholder="Your username"
            label="Username"
            description={undefined}
            required={true}
            {...form.getInputProps('username')}
          />
        </Box>
        <Box mb="0.75rem">
          <TextInput
            placeholder="Your first name"
            label="First name"
            description={undefined}
            required={true}
            {...form.getInputProps('firstname')}
          />
        </Box>
        <Box mb="0.75rem">
          <TextInput
            placeholder="Your last name"
            label="Last name"
            description={undefined}
            required={true}
            {...form.getInputProps('lastname')}
          />
        </Box>
        <Box mb="0.75rem">
          <TextInput
            placeholder="Your email"
            label="Email"
            description={undefined}
            required={true}
            {...form.getInputProps('email')}
          />
        </Box>
        <Box mb="0.75rem">
          <PasswordInput
            placeholder="Your password"
            label="Password"
            description="Password must include at least one letter, number and special character"
            required={true}
            {...form.getInputProps('password')}
          />
        </Box>
        <PasswordInput
          placeholder="Confirm your password"
          label="Confirm your password"
          description="Password must include at least one letter, number and special character"
          required={true}
          {...form.getInputProps('confirmPassword')}
        />
        <Button type="submit" mt={'2rem'} w={'100%'}>
          Register
        </Button>
      </form>
    </Container>
  );
};
