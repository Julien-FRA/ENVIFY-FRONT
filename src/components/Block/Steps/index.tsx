import {
  Box,
  Container,
  Flex,
  FlexProps,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import Image from 'next/image';

export const StepBlock = () => {
  return (
    <Container size="xl" py={50} w={'75vw'}>
      <Title order={2} size={35} ta="center" mb={50}>
        Creating Your Custom Configuration on Envify
      </Title>
      <SimpleGrid cols={2} mt={100}>
        <StepProccessBlock
          title="Log in / Sign up"
          text="Log in, or Sign up to create a new account if you don’t have one yet."
          src="step-1"
          align="flex-start"
        />
        <StepProccessBlock
          title="Start a Configuration"
          text={`Click "Create New Configuration" or select an existing one to modify.`}
          src="step-2"
          align="flex-end"
        />
        <StepProccessBlock
          title="Name Config and Choose OS"
          text="Enter a configuration name and select your preferred operating system."
          src="step-3"
          align="flex-start"
        />
        <StepProccessBlock
          title="Select Your Packages/Tools"
          text="Choose the packages and tools you want from our extensive library."
          src="step-4"
          align="flex-end"
        />
        <StepProccessBlock
          title="Configure Your Selections"
          text="Adjust the settings for each selected package/tool to meet your needs."
          src="step-5"
          align="flex-start"
        />
        <StepProccessBlock
          title="Confirm and Generate"
          text="Confirm and Wait for our service to automatically generate the installation script."
          src="step-6"
          align="flex-end"
        />
        <StepProccessBlock
          title="Get the Script"
          text="Run the provided sh script or commands in your terminal to install your selections."
          src="step-7"
          align="flex-start"
        />
        <StepProccessBlock
          title="Save and Share"
          text="Save your custom configuration and have the option to share it with others."
          src="step-8"
          align="flex-end"
        />
      </SimpleGrid>
    </Container>
  );
};

type StepProccessProps = FlexProps & {
  title: string;
  text: string;
  src: string;
};

const StepProccessBlock = ({
  title,
  src,
  text,
  ...props
}: StepProccessProps) => {
  return (
    <Flex justify="center" h={500} {...props}>
      <Box w={350}>
        <Image
          src={`../../${src}.svg`}
          alt="Infrastructure as Code illustration"
          width={300}
          height={250}
        />
        <Title order={3} size={24} mb="md">
          {title}
        </Title>
        <Text size="md" pb="xl" c="gray.3">
          {text}
        </Text>
      </Box>
    </Flex>
  );
};
