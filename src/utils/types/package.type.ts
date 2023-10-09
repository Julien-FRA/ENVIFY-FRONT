// todo : add logo
export type PackageDto = {
  id: number;
  name: string;
};

export type PackageVersionDto = {
  id: number;
  versionStatusId: number;
  packageId: number;
  url?: string | null;
  versionNumber?: string | null;
};

export type PackageConfigFilesDto = {
  id: number;
  packageVersionId: number;
  description?: string | null;
  properties?: string | null;
};

export type PackageInput = {
  name: string;
  version: string;
};
