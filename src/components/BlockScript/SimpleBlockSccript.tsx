import React from 'react';
import { Text, Box } from '@mantine/core';
import { ConfigFileDto, ScriptDto } from '@/utils/types/script.type';
import { CodeContainer } from '../Container/Code.container';

type BlockScriptProps = {
  scripts: ScriptDto[];
  configFiles?: ConfigFileDto[];
};

export const SimpleBlockScript = ({ scripts }: BlockScriptProps) => {
  return (
    <CodeContainer>
      <>
        {scripts.map((script) => (
          <Box key={`${script.scriptLabel}-${script.script}`} my={20}>
            <Text size="sm" c="gray.6">
              {script.scriptLabel}
            </Text>
            <Text size="">{script.script}</Text>
          </Box>
        ))}
      </>
    </CodeContainer>
  );
};
