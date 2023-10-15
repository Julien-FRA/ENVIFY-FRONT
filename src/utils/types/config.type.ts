import { OperatingSystemInput } from './operatingSystem.type';
import {
  ConfigArraySchema,
  ConfigSchema,
  PackageSchema,
} from '../schemas/config.schema';
import { PackageInput } from './package.type';
import { z } from 'zod';

export type Configs = z.infer<typeof ConfigArraySchema>;
export type Config = z.infer<typeof ConfigSchema>;

export type Package = z.infer<typeof PackageSchema>;

export type HiddenConfig = {
  config: Config;
  error: string;
};

export type ErrorDetails = {
  hasSomeUnusableConfigs: boolean;
  message: string;
  messageDetails: string;
  hiddenConfigs: HiddenConfig[];
};

export type Script = {
  comment: string;
  script: string;
};

export type ConfigInput = {
  name: string;
  description?: string;
  os: OperatingSystemInput;
  packages: PackageInput[];
};
