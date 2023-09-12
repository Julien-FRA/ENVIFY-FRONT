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
    <Box>
      <Title order={1} size={40} mb={8}>
        Get Started
      </Title>
      <Text size="md" mb={32}>
        Create a new account
      </Text>

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Box mb={12}>
          <TextInput
            placeholder="Your username"
            label="Username"
            description={undefined}
            required={true}
            {...form.getInputProps('username')}
          />
        </Box>
        <Group mb={12} wrap="nowrap">
          <TextInput
            placeholder="Your first name"
            label="First name"
            description={undefined}
            required={true}
            {...form.getInputProps('firstname')}
          />
          <TextInput
            placeholder="Your last name"
            label="Last name"
            description={undefined}
            required={true}
            {...form.getInputProps('lastname')}
          />
        </Group>
        <Box mb={12}>
          <TextInput
            placeholder="Your email"
            label="Email"
            description={undefined}
            required={true}
            {...form.getInputProps('email')}
          />
        </Box>
        <Box mb={12}>
          <PasswordInput
            placeholder="Your password"
            label="Password"
            required={true}
            {...form.getInputProps('password')}
          />
        </Box>
        <PasswordInput
          placeholder="Confirm your password"
          label="Confirm your password"
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
