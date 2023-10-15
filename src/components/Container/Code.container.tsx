import React from 'react';
import classes from '../BlockScript/BlockScript.module.css';
import { Box, Code } from '@mantine/core';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

type CodeContainerProps = {
  children: JSX.Element | JSX.Element[];
};

export const CodeContainer = ({ children }: CodeContainerProps) => {
  return (
    <Box
      p="md"
      mb="md"
      style={{
        border: '1px solid var(--mantine-color-dark-3)',
        color: 'var(--mantine-color-dark-3)',
        borderRadius: '6px',
      }}
    >
      <Code
        classNames={{
          root: classes.blockScriptCode,
        }}
        fz="md"
        c="white"
        p={0}
        style={{ ...sourceCodePro.style }}
      >
        {children}
      </Code>
    </Box>
  );
};
