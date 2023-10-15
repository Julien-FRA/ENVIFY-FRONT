export type OperatingSystemDto = {
  id: number;
  name: string;
};

export type OperatingSystemVersionDto = {
  id: number;
  versionNumber: string;
  operatingSystemId: number;
};

export type OperatingSystemInput = {
  versionId: number;
  name: string;
  versionNumber: string;
};
