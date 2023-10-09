'use client';
import { Checkbox, Text, Box, Flex, Avatar } from '@mantine/core';
import React, { useState } from 'react';
import classes from './CardCheckBox.module.css';
import { PackageVersionSelect } from '@/components/Select/PackageVersion.select';

type CardCheckBoxProps = {
  title: string;
  packageId: number;
  onChange: (
    configName: string,
    version: string | null,
    checked: boolean
  ) => void;
  image?: string;
  defaultChecked?: boolean;
};

export const CheckboxCard = (props: CardCheckBoxProps) => {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [packageChecked, setPackageChecked] = useState(false);

  const handlePackageChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;
    setPackageChecked(isChecked);
    props.onChange(props.title, selectedVersion, isChecked);
  };

  const handleVersion = (versionValue: string) => {
    setSelectedVersion(versionValue);
    props.onChange(props.title, versionValue, packageChecked);
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      className={classes.cardCheckBoxContainer}
    >
      <Flex align="center" gap="sm">
        <Flex display="flex" align="center" justify="center">
          <Avatar src={props.image} alt={props.title} size={48} />
        </Flex>
        <Box>
          <Text c="white">{props.title}</Text>
        </Box>
      </Flex>
      <Checkbox onChange={handlePackageChecked} tabIndex={-1} />
      {packageChecked && (
        <PackageVersionSelect
          packageId={props.packageId}
          selectedVersion={selectedVersion}
          handleVersion={handleVersion}
        />
      )}
    </Flex>
  );
};
