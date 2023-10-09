'use client';
import classes from './Button.module.css';
import { ActionIcon, CopyButton, Tooltip } from '@mantine/core';
import { TbCheck, TbCopy } from 'react-icons/tb';

export const ButtonCopy = ({ value }: { value: string }) => {
  return (
    <CopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon variant="subtle" onClick={copy} color="dark">
            {copied ? (
              <TbCheck className={classes.copyIcon} />
            ) : (
              <TbCopy className={classes.copyIcon} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
};
