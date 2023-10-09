'use client';
import { useForm } from '@mantine/form';
import {
  Box,
  Button,
  Text,
  TextInput,
  Title,
  PasswordInput,
  Group,
} from '@mantine/core';
import { CreateUserDto } from '@/utils/types/user.type';
import { userRegister } from '@/utils/api/user.api';
import { signIn } from 'next-auth/react';

export const RegisterForm = () => {
  const form = useForm<CreateUserDto>({
    initialValues: {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      company: '',
    },
    clearInputErrorOnChange: true,

    validate: {
      username: (value) =>
        value.length >= 1 ? null : 'Username must be at least 1 characters',
      first_name: (value) =>
        value && value.length >= 1
          ? null
          : 'First name must be at least 1 characters',
      last_name: (value) =>
        value && value.length >= 1
          ? null
          : 'Last name must be at least 1 characters',
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)
          ? null
          : 'Password must include at least one letter, number and special character',
    },
  });

  const onSubmit = async (values: CreateUserDto) => {
    const res = await userRegister({
      ...values,
    });

    if (!res) return;

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
            name="firstname"
            required={true}
            {...form.getInputProps('firstname')}
          />
          <TextInput
            placeholder="Your last name"
            label="Last name"
            name="lastname"
            required={true}
            {...form.getInputProps('lastname')}
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
          name="confirmpassword"
          required={true}
          {...form.getInputProps('confirmPassword')}
        />
        <Button type="submit" mt={'2rem'} w={'100%'}>
          Register
        </Button>
      </form>
    </Box>
  );
};
