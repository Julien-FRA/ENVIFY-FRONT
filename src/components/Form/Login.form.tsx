'use client';
import { useForm } from '@mantine/form';
import {
  Box,
  Button,
  Text,
  TextInput,
  Title,
  PasswordInput,
} from '@mantine/core';
import { UserLogType } from '@/utils/types/user.type';
import { signIn } from 'next-auth/react';

export const LoginForm = () => {
  const form = useForm<UserLogType>({
    initialValues: {
      email: 'envifyadmin@gmail.com',
      password: 'test1',
    },

    validate: (values) => ({
      email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
      password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        values.password
      )
        ? null
        : 'Password must include at least one letter, number and special character',
    }),
  });

  const onSubmit = (values: UserLogType) => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <Box>
      <Title order={1} size={40} mb={8}>
        Welcome back
      </Title>
      <Text size="md" mb={32}>
        Sign in to your account
      </Text>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Box mb={12}>
          <TextInput
            placeholder="Your email"
            label="Email"
            name="email"
            required={true}
            {...form.getInputProps('email')}
          />
        </Box>
        <PasswordInput
          placeholder="Your password"
          label="Password"
          required={true}
          name="password"
          {...form.getInputProps('password')}
        />
        <Button type="submit" mt={32} fullWidth>
          Sign in
        </Button>
      </form>
    </Box>
  );
};
