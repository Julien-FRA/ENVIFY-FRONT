'use client';
import { ButtonArrow, ButtonPrimary } from '@/components/Button/Button';
import { HorizontalNav } from '@/components/Nav/Horizontal.nav';
import { Box, Container, Flex, Text, Title } from '@mantine/core';

export const MainBlock = () => {
  return (
    <>
      <HorizontalNav />
      <Container size="md" p={1} mt={32}>
        <Title order={1} size={'64px'} mx="0.5rem" my="1rem" ta="center">
          Simplify your virtual machine configuration effortlessly
        </Title>
      </Container>
      <Container size="sm">
        <Text size="md" mx="0.5rem" my="1rem" ta="center">
          Focus on what matters the most, save time and configure your virtual
          machine in few clicks. You choose, we provide all you need
        </Text>
      </Container>
      <Flex justify="center" align="center" direction="column">
        <Box my="0.5rem">
          <ButtonPrimary href={'/register'}>Get started</ButtonPrimary>
        </Box>
        <Box my="0.5rem">
          <ButtonArrow href={'/community'}>
            See community configuration
          </ButtonArrow>
        </Box>
      </Flex>
    </>
  );
};
