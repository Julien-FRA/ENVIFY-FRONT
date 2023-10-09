export type Package = {
  name: string;
  version: string[];
  alias: string;
  logo?: string;
};

export type PackageInput = {
  name: string;
  version: string;
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
