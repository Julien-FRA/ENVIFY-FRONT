'use client';
import { matchesField, useForm } from '@mantine/form';
import {
  Box,
  Text,
  TextInput,
  Title,
  PasswordInput,
  Group,
  Flex,
} from '@mantine/core';
import { CreateUserDto } from '@/utils/types/user.type';
import { userRegister } from '@/utils/api/user.api';
import { signIn } from 'next-auth/react';
import { Button } from '../Button';

type userFormType = CreateUserDto & {
  confirmPassword: string;
};

export const RegisterForm = () => {
  const form = useForm<userFormType>({
    initialValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      password: '',
      confirmPassword: '',
    },
    clearInputErrorOnChange: true,

    validate: {
      username: (value) =>
        value.length >= 1 ? null : 'Username must be at least 1 characters',
      firstName: (value) =>
        value && value.length >= 1
          ? null
          : 'First name must be at least 1 characters',
      lastName: (value) =>
        value && value.length >= 1
          ? null
          : 'Last name must be at least 1 characters',
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)
          ? null
          : 'Password must include at least one letter, number and special character',
      confirmPassword: matchesField('password', 'Passwords are not the same'),
    },
  });

  const onSubmit = async (values: CreateUserDto) => {
    const res = await userRegister({
      email: values.email,
      username: values.username,
      lastName: values.lastName,
      firstName: values.firstName,
      company: values.company,
      password: values.password,
    });

    if (!res.id) return;

    signIn('credentials', {
      email: res.email,
      password: res.password,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <Box>
      <Title order={1} size={40} mb={8}>
        Get Started
      </Title>
      <Text size="md" mb={32}>
        Create a new account
      </Text>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Box mb={12}>
          <TextInput
            placeholder="Your username"
            label="Username"
            name="username"
            required={true}
            {...form.getInputProps('username')}
          />
        </Box>
        <Group mb={12} wrap="nowrap">
          <TextInput
            placeholder="Your first name"
            label="First name"
            name="firstName"
            required={true}
            {...form.getInputProps('firstName')}
          />
          <TextInput
            placeholder="Your last name"
            label="Last name"
            name="lastName"
            required={true}
            {...form.getInputProps('lastName')}
          />
        </Group>
        <Box mb={12}>
          <TextInput
            placeholder="Your email"
            label="Email"
            name="email"
            required={true}
            {...form.getInputProps('email')}
          />
        </Box>
        <Box mb={12}>
          <PasswordInput
            placeholder="Your password"
            label="Password"
            name="password"
            required={true}
            {...form.getInputProps('password')}
          />
        </Box>
        <PasswordInput
          placeholder="Confirm your password"
          label="Confirm your password"
          name="confirmPassword"
          required={true}
          {...form.getInputProps('confirmPassword')}
        />
        <Button type="submit" mt={'2rem'} w={'100%'}>
          Register
        </Button>
      </form>
      <Flex mt={15} align="center">
        <Text size="sm" c="gray.3">
          You have an account ?
        </Text>
        <Button href="/login" variant="arrow" px={2} miw="4.25rem">
          Sing in
        </Button>
      </Flex>
    </Box>
  );
};
