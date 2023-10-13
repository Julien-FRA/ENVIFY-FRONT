import { OperatingSystemInput } from './operatingSystem.type';
import { PackageInput, PackagePropertiesInput } from './package.type';

export type Package = {
  name: string;
  version: string[];
  alias: string;
  logo?: string;
};

export type Script = {
  comment: string;
  script: string;
};

export type Config = {
  id: number;
  name: string;
  created_at: string;
  packages: Package[];
  scripts?: Script[];
};

export type Configs = Config[];

export type ConfigInput = {
  configName: string;
  operatingSystem: OperatingSystemInput;
  packages: PackageInput[];
  packagesProperties: PackagePropertiesInput[];
};
