import React from 'react';
import { Text, Box, Title, Flex } from '@mantine/core';
import { ConfigFileDto, ScriptDto } from '@/utils/types/script.type';
import { CodeContainer } from '../Container/Code.container';
import { useConfigFormContext } from '@/app/dashboard/config/create/configForm.context';
import { ButtonCopy } from '../Button/Copy.Button';
import { Button } from '../Button';
import { DownloadButton } from '../Button/Download.Button';

type BlockScriptProps = {
  scripts: ScriptDto[];
  configFiles: ConfigFileDto[];
};

export const BlockScript = ({ scripts, configFiles }: BlockScriptProps) => {
  const form = useConfigFormContext();

  return (
    <Box>
      <Flex gap="md" justify="end">
        <Button href="dashboard/config/all">My configurations</Button>
        <Button href="dashboard/config/create" reload variant="outline">
          Create another config
        </Button>
      </Flex>
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
          <Flex justify={'space-between'} mb={20}>
            <Text size="xl" c="gray.7">
              Generated scripts for :{' '}
              {form.values.packages.map((pck) => `${pck.name} / `)}
            </Text>
            <DownloadButton name={form.values.name} scripts={scripts} />
          </Flex>

          {scripts.map((script, index) => (
            <Box key={`${script.scriptLabel}-${index}`} my={20}>
              <Text size="sm" c="gray.6">
                {script.scriptLabel}
              </Text>
              <Flex justify="space-between">
                <Text>{script.script}</Text>
                <ButtonCopy value={script.script} />
              </Flex>
            </Box>
          ))}
        </>
      </CodeContainer>
      <CodeContainer>
        <>
          <Flex justify={'space-between'} mb={20}>
            <Text size="xl" c="gray.7">
              Generated config file :
            </Text>
          </Flex>
          {configFiles.map((configFile, index) => (
            <Box key={`${configFile.fileName}-${index}`} my={20}>
              <Text size="sm" c="gray.6">
                {configFile.fileName}
              </Text>
              <Flex
                justify="space-between"
                style={{
                  whiteSpace: 'pre-wrap',
                  overflow: 'auto',
                }}
              >
                <pre>{configFile.file}</pre>
                <ButtonCopy value={configFile.file} />
              </Flex>
            </Box>
          ))}
        </>
      </CodeContainer>
    </Box>
  );
};
