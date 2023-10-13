'use client';
import { Checkbox, Text, Box, Flex, Avatar } from '@mantine/core';
import React, { useState } from 'react';
import classes from './CardCheckBox.module.css';
import { PackageVersionSelect } from '@/components/Select/PackageVersion.select';
import { PackageVersionDto } from '@/utils/types/package.type';

type CardCheckBoxProps = {
  name: string;
  packageId: number;
  versions: PackageVersionDto[];
  onChange: (
    configName: string,
    version: string | null,
    checked: boolean
  ) => void;
  image?: string;
  defaultChecked?: boolean;
};

export const CheckboxCard = (props: CardCheckBoxProps) => {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(
    props.versions.length > 0 ? String(props.versions[0].id) : null
  );
  const [packageChecked, setPackageChecked] = useState(false);

  const handlePackageChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;
    setPackageChecked(isChecked);
    props.onChange(props.name, selectedVersion, isChecked);
  };

  const handleVersion = (versionValue: string) => {
    setSelectedVersion(versionValue);
    props.onChange(props.name, versionValue, packageChecked);
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      className={classes.cardCheckBoxContainer}
    >
      <Flex align="center" gap="sm">
        <Flex display="flex" align="center" justify="center">
          <Avatar src={props.image} alt={props.name} size={48} />
        </Flex>
        <Box>
          <Text c="white">{props.name}</Text>
          <PackageVersionSelect
            versions={props.versions}
            selectedVersion={selectedVersion}
            handleVersion={handleVersion}
          />
        </Box>
      </Flex>
      <Checkbox onChange={handlePackageChecked} tabIndex={-1} />
    </Flex>
  );
};
