'use client';
import { Checkbox, Text, Box, Flex, Avatar } from '@mantine/core';
import React, { useState } from 'react';
import classes from './CardCheckBox.module.css';
import { PackageVersionSelect } from '@/components/Select/PackageVersion.select';
import { PackageVersionDto } from '@/utils/types/package.type';
import {
  HandleVersion,
  PackageVersion,
} from '@/app/dashboard/config/create/block/SelectPackage.block';

type CardCheckBoxProps = {
  name: string;
  packageId: number;
  versions: PackageVersionDto[];
  onChange: HandleVersion;
  image?: string;
  defaultChecked?: boolean;
};

export const CheckboxCard = (props: CardCheckBoxProps) => {
  const [packageChecked, setPackageChecked] = useState(false);

  const [selectedVersion, setSelectedVersion] = useState<PackageVersion | null>(
    props.versions.length > 0
      ? {
          versionId: props.versions[0].id,
          versionNumber: props.versions[0].versionNumber,
        }
      : null
  );

  const handlePackageChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;
    setPackageChecked(isChecked);
    props.onChange(props.packageId, props.name, selectedVersion, isChecked);
  };

  const handleVersion = (versionId: number | null, versionNumber?: string) => {
    if (!versionId || !versionNumber) return;

    setSelectedVersion({
      versionId,
      versionNumber,
    });
    props.onChange(
      props.packageId,
      props.name,
      { versionId, versionNumber },
      packageChecked
    );
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
            selectedVersion={selectedVersion?.versionId}
            handleVersion={handleVersion}
          />
        </Box>
      </Flex>
      <Checkbox onChange={handlePackageChecked} tabIndex={-1} />
    </Flex>
  );
};
