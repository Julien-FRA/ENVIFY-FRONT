export type ScriptConfigDto = {
  scripts: ScriptDto[];
  configFiles: ConfigFileDto[];
};

export type ScriptDto = {
  scriptLabel: string;
  script: string;
};

export type ConfigFileDto = {
  file: string;
  fileName: string;
};
