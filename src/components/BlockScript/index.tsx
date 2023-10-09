import React from 'react';
import classes from './BlockScript.module.css';
import { Code, Text, Box } from '@mantine/core';
import { Source_Code_Pro } from 'next/font/google';
import { ButtonCopy } from '../Button/Copy.Button';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

type BlockScriptProps = {
  comment?: string;
  code: string;
};

export const BlockScript = ({ comment, code }: BlockScriptProps) => {
  return (
    <Box
      className={`${classes.blockScriptContainer} ${sourceCodePro.className}`}
      p="md"
      mb="md"
    >
      <Text size="md" component="p" pr="xl">
        {comment}
      </Text>
      <Code
        classNames={{
          root: classes.blockScriptCode,
        }}
        fz="md"
        c="white"
        p={0}
        style={{ ...sourceCodePro.style }}
      >
        {code}
      </Code>
      <Box className={classes.copy} p="md">
        <ButtonCopy value={code} />
      </Box>
    </Box>
  );
};
