import React from 'react';
import { Text, Box, Title } from '@mantine/core';
import { ConfigFileDto, ScriptDto } from '@/utils/types/script.type';
import { CodeContainer } from '../Container/Code.container';
import { useConfigFormContext } from '@/app/dashboard/config/create/configForm.context';

type BlockScriptProps = {
  scripts: ScriptDto[];
  configFiles: ConfigFileDto[];
};

export const BlockScript = ({ scripts, configFiles }: BlockScriptProps) => {
  const form = useConfigFormContext();

  return (
    <Box>
      <Box mb="md">
        <Title c="violet.4" order={1}>
          {form.values.name}
        </Title>
        <Title order={6} c="gray.5" mb="lg">
          {form.values.description}
        </Title>
      </Box>
      <CodeContainer>
        <>
          <Text size="xl" c="gray.7">
            Generated scripts for :{' '}
            {form.values.packages.map((pck) => `${pck.name} / `)}
          </Text>
          {scripts.map((script, index) => (
            <Box key={`${script.scriptLabel}-${index}`} my={20}>
              <Text size="sm" c="gray.6">
                {script.scriptLabel}
              </Text>
              <Text size="">{script.script}</Text>
            </Box>
          ))}
        </>
      </CodeContainer>
      <CodeContainer>
        <>
          <Text size="xl" c="gray.7">
            Generated config file :
          </Text>
          {configFiles.map((configFile, index) => (
            <Box key={`${configFile.fileName}-${index}`} my={20}>
              <Text size="sm" c="gray.6">
                {configFile.fileName}
              </Text>
              {configFile.file.split('\n').map((str, index) => (
                <Text size="sm" key={index} my={15}>
                  {str}
                </Text>
              ))}
            </Box>
          ))}
        </>
      </CodeContainer>
    </Box>
  );
};
