'use client';
import React from 'react';
import { useForm } from '@mantine/form';
import { Box, Button, Container, Text, TextInput, Title } from '@mantine/core';
import { PasswordInput } from '@/components/Input/password/Password.input';

export const LoginForm = () => {
  const form = useForm<{ email: string; password: string }>({
    initialValues: {
      email: '',
      password: '',
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

  return (
    <Container size="sm" p={'2rem'} my={'2rem'}>
      <Title order={1} size={'2.5rem'} mb={'0.5rem'}>
        Welcome back
      </Title>
      <Text size="md" mb={'2rem'}>
        Sign in to your account
      </Text>

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Box mb="0.75rem">
          <TextInput
            placeholder="Your email"
            label="Email"
            description={undefined}
            required={true}
            {...form.getInputProps('email')}
          />
        </Box>
        <PasswordInput
          placeholder="Your password"
          label="Password"
          description="Password must include at least one letter, number and special character"
          required={true}
          {...form.getInputProps('password')}
        />
        <Button type="submit" mt={'2rem'} w={'100%'}>
          Sign in
        </Button>
      </form>
    </Container>
  );
};
