import { Button } from '@/components/Button';
import { Header } from '@/components/Nav/Header';
import { NextAuthProvider } from '@/utils/providers/next-auth.provider';
import { DetailsBlock } from '@/components/Block/Details';
import { StepBlock } from '@/components/Block/Steps';
import { Box, Container, Flex, SimpleGrid, Text, Title } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';

export default function Home() {
  return (
    <SimpleGrid cols={1} spacing="xl">
      <NextAuthProvider>
        <Header />
      </NextAuthProvider>
      <Box mt={100} mb="xl" h={'55vh'}>
        <Container size="md" pb="lg">
          <Title order={1} size={64} ta="center">
            Simplify your virtual machine configuration effortlessly
          </Title>
        </Container>
        <Container size="sm" pb="lg">
          <Text size="md" ta="center" c="dimmed">
            Focus on what matters the most, save time and configure your virtual
            machine in few clicks. You choose, we provide all you need
          </Text>
        </Container>
        <Flex justify="center" align="center" direction="column" pb="lg">
          <Box pb={'md'}>
            <Button variant="filled" href="/register">
              Get started
            </Button>
          </Box>
          <Box>
            <Button
              variant="arrow"
              rightSection={<BsArrowRight />}
              href="/community"
            >
              See community configuration
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box bg="dark.5">
        <DetailsBlock />
      </Box>
      <StepBlock />
    </SimpleGrid>
  );
}
