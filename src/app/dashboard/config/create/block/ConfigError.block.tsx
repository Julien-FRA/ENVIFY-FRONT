import { Center, Text } from '@mantine/core';

export const ConfigError = (): JSX.Element => {
  return (
    <Center h={200}>
      <Text size="1.5rem" c="white">
        Une erreur est survenue, veuillez réessayer ultérieurement
      </Text>
    </Center>
  );
};
