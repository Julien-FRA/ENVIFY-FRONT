'use client';
import { Checkbox, Text, Box, Flex } from '@mantine/core';
import React, { useState } from 'react';
import classes from './CardCheckBox.module.css';
import { PackageVersionSelect } from '@/components/Select/PackageVersion.select';
import { PackageVersionDto } from '@/utils/types/package.type';
import {
  HandleVersion,
  PackageVersion,
} from '@/app/dashboard/config/create/block/SelectPackage.block';
import { useQuery } from 'react-query';
import { AvatarLogo } from '@/components/Icons/Avatar/Avatar.Logo';

type CardCheckBoxProps = {
  name: string;
  packageId: number;
  versions: PackageVersionDto[];
  onChange: HandleVersion;
  defaultChecked?: boolean;
};

const fetchPackageIcon = async (
  packageName: string
): Promise<string | null> => {
  const res = await fetch(
    `https://api.iconscout.com/v3/search?query=${packageName}&product_type=item&asset=icon&price=free&per_page=1&page=1&formats%5B%5D=svg&sort=relevant`,
    {
      headers: {
        'Client-ID': process.env.NEXT_PUBLIC_ICON_SCOUT_CLIENT_ID,
      },
    }
  );
  const data = await res.json();
  const icon = data?.response?.items?.data?.[0].urls?.png_64;
  return icon;
};

export const CheckboxCard = (props: CardCheckBoxProps) => {
  const { data: IconData } = useQuery(['iconscout', props.name], () =>
    fetchPackageIcon(props.name)
  );

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
          <AvatarLogo src={IconData ?? null} />
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
