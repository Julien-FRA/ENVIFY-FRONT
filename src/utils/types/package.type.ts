export type PackageDto = {
  id: number;
  name: string;
  packageVersions: PackageVersionDto[];
};

export type PackageVersionDto = {
  id: number;
  versionStatusId: number;
  packageId: number;
  url: string;
  versionNumber: string;
};

export type PackagePropertiesDto = {
  id: number;
  packageVersionId: number;
  properties: string;
  description?: string | null;
};

export type PackagePropertiesPackagesId = {
  packageVersionIds: number[];
};

export type PackageInput = {
  packageId: number;
  name: string;
  versionId: number;
  versionNumber: string;
  packageProperties: PropertiesInput[];
};

export type PropertiesInput = PropertiesMultipleInput | PropertiesSingleInput;

export type PropertiesMultipleInput = {
  type: 'multiple';
  category?: string | null;
  field: string;
  label: string;
  properties: PropertiesSingleInput[];
  values: PropertiesMultipleInput['properties'][];
};

export type PropertiesSingleInput =
  | PropertiesText
  | PropertiesSwitch
  | PropertiesSelect;

type PropertiesText = {
  type: 'text';
  category?: string | null;
  field: string;
  label: string;
  value: string;
};

type PropertiesSwitch = {
  type: 'boolean';
  category?: string | null;
  field: string;
  label: string;
  value: boolean;
};

type PropertiesSelect = {
  type: 'select';
  category?: string | null;
  field: string;
  label: string;
  value: string;
  items: string[];
};
