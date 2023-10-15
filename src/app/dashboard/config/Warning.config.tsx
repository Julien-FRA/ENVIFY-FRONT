import { ButtonIcon } from '@/components/Button';
import { ErrorDetails } from '@/utils/types/config.type';
import {
  Flex,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Text,
} from '@mantine/core';
import { RiErrorWarningLine } from 'react-icons/ri';

export const WarningConfig = ({ errors }: { errors: ErrorDetails }) => {
  return (
    <Flex align="center">
      <Text component="p" size="sm" c="gray.6">
        {errors.message}
      </Text>
      <Popover width={300} withArrow shadow="md">
        <PopoverTarget>
          <ButtonIcon mb={0}>
            <RiErrorWarningLine color="red" />
          </ButtonIcon>
        </PopoverTarget>
        <PopoverDropdown>
          <Text component="p" size="md" c="gray.4" mb="lg">
            {errors.messageDetails}
          </Text>

          <Text component="p" size="sm" c="gray.4">
            CONCERNED CONFIGS :
            {errors.hiddenConfigs.map(({ config }) => (
              <Text key={config.id} c="red">
                {config.name}
              </Text>
            ))}
          </Text>
        </PopoverDropdown>
      </Popover>
    </Flex>
  );
};
