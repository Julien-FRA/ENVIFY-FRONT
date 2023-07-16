'use client';
import InputPassword from '@/components/Input/Password.input';
import InputText from '@/components/Input/Text.input';
import HeaderHorizontal from '@/components/Nav/Header.horizontal';
import { Box, Text, Title } from '@mantine/core';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mantine/hooks';
import PrimaryPutton from '@/components/Button/Primary.button';

const DivCustom = styled.div`
  max-width: 475px;
  margin: 2rem auto;
  padding: 0.5rem;
`;

export default function Login() {
  const smallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <HeaderHorizontal />
      <DivCustom>
        <Title order={1} size={smallScreen ? '26px' : '32px'} mb="0.5rem">
          Welcome back
        </Title>
        <Text size="md" mb="2rem">
          Sign in to your account
        </Text>
        <Box mb="0.75rem">
          {' '}
          <InputText
            placeholder="Your email"
            label="Email"
            required={true}
            description={undefined}
          />
        </Box>
        <InputPassword
          placeholder="Your password"
          label="Password"
          description="Password must include at least one letter, number and special character"
          required={true}
        />
        <Box mt="2rem">
          <PrimaryPutton href={'/'}>Sign in</PrimaryPutton>
        </Box>
      </DivCustom>
    </>
  );
}
