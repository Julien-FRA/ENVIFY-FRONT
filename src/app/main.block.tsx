'use client';
import { Button, ButtonPrimary } from '@/components/Button/Button';
import { Box, Container, Text, Title } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';

export const MainBlock = () => {
  return (
    <Container size="xs" p={1} my={32}>
      <Title order={1} size={'64px'} mx="0.5rem" my="1rem" ta="center">
        Simplify your virtual machineconfiguration effortlessly
      </Title>
      <Text size="md" mx="0.5rem" my="1rem" ta="center">
        Focus on what matters the most, save time and configure your virtual
        machine in few clicks. You choose, we provide all you need
      </Text>
      <Box my="1rem">
        <ButtonPrimary href={'/register'}>Get started</ButtonPrimary>
      </Box>
      <Box my="1rem">
        <Button href={'/community'} rightIcon={<BsArrowRight />}>
          See community configuration
        </Button>
      </Box>
    </Container>
  );
};
