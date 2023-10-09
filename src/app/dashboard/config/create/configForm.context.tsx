'use client';
import { OperatingSystemInput } from '@/utils/types/operatingSystem.type';
import { PackageInput } from '@/utils/types/package.type';
import { createFormContext } from '@mantine/form';

export type ConfigContext = {
  configName?: string;
  operatingSystem: OperatingSystemInput;
  packages: PackageInput[];
};

export const [ConfigFormProvider, useConfigFormContext, useConfigForm] =
  createFormContext<ConfigContext>();
