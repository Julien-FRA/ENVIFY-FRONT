import {
  Center,
  Container,
  Flex,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import Image from 'next/image';

export const DetailsBlock = () => {
  return (
    <Container size="xl" pt={50} py={150}>
      <Title order={2} size={40} ta="center">
        Unleashing Seamless Tech Integration
      </Title>
      <Title order={5} ta="center" mt={15} c="dimmed">
        Streamline Your Setup: Custom Configurations in Minutes!
      </Title>
      <SimpleGrid cols={2} mt={80}>
        <Center>
          <Image
            src="../../home_bg.svg"
            alt="Infrastructure as Code illustration"
            width={500}
            height={500}
          />
        </Center>

        <SimpleGrid cols={2} spacing="xl">
          <Flex direction="column" justify="center">
            <Title order={3} size={24} mb="md">
              Ease of Use
            </Title>
            <Text size="md" pb="xl" c="gray.3">
              Intuitive user interface, making it easy for even beginners to
              navigate and create custom configurations, ensuring a solution
              that fits their specific needs.
            </Text>
          </Flex>
          <Flex direction="column" justify="center">
            <Title order={3} size={24} mb="md">
              Efficiency
            </Title>
            <Text size="md" pb="xl" c="gray.3">
              Receive an automated script to install all your selected packages
              and tools, eliminating human errors and ensuring a successful
              installation.
            </Text>
          </Flex>
          <Flex direction="column" justify="center">
            <Title order={3} size={24} mb="md">
              Diversity
            </Title>
            <Text size="md" pb="xl" c="gray.3">
              Envify is committed to continuously expanding and updating its
              library of tools and packages to stay current with the latest tech
              trends.
            </Text>
          </Flex>
          <Flex direction="column" justify="center">
            <Title order={3} size={24} mb="md">
              Community
            </Title>
            <Text size="md" pb="xl" c="gray.3">
              Users can browse and utilize configurations already created by the
              community, promoting knowledge sharing and collaboration.
            </Text>
          </Flex>
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  );
};
