'use client';
import React from 'react';
import { useForm } from '@mantine/form';
import { Box, Button, Container, Text, TextInput, Title } from '@mantine/core';
import { PasswordInput } from '@/components/Input/password/Password.input';
import { ButtonPrimary } from '@/components/Button/Button';
import { BsArrowLeft } from 'react-icons/bs';

export const RegisterForm = () => {
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
    <>
      <Box mt={'1rem'} ml={'1rem'}>
        <ButtonPrimary href={'/'}>
          <BsArrowLeft />
        </ButtonPrimary>
      </Box>
      <Container size="xs" p={1} my={32}>
        <Title order={1} size={'32px'} mb="0.5rem">
          Get Started{' '}
        </Title>
        <Text size="md" mb="2rem">
          Create a new account
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
            {...form.getInputProps('password')}
          />
          <Button type="submit" mt="2rem">
            Register
          </Button>
        </form>
      </Container>
    </>
  );
};
