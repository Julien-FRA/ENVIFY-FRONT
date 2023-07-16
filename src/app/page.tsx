'use client';
import ArrowButton from '@/components/Button/Arrow.button';
import PrimaryPutton from '@/components/Button/Primary.button';
import HeaderHorizontal from '@/components/Nav/Header.horizontal';
import { Box, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import styled from '@emotion/styled';

const DivCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 2rem auto;
  max-width: 875px;
`;

export default function Landing() {
  const smallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <HeaderHorizontal />
      <DivCustom>
        <Title
          order={1}
          size={smallScreen ? '32px' : '64px'}
          mx="0.5rem"
          my="1rem"
          ta="center"
        >
          Simplify your virtual machineconfiguration effortlessly
        </Title>
        <Text size="md" mx="0.5rem" my="1rem" ta="center">
          Focus on what matters the most, save time and configure your virtual
          machine in few clicks. You choose, we provide all you need
        </Text>
        <Box my="1rem">
          <PrimaryPutton href={'/register'}>Get started</PrimaryPutton>
        </Box>
        <Box my="1rem">
          <ArrowButton href={'/community'}>
            See community configuration
          </ArrowButton>
        </Box>
      </DivCustom>
    </>
  );
}
