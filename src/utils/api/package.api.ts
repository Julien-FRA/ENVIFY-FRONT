import { PackageDto, PackageVersionDto } from '../types/package.type';
import { apiClient } from './apiFactory';

export const getPackages = async () =>
  await apiClient.get<PackageDto[]>('/api/v1/packages');

export const getPackageVersions = async (id: number) =>
  await apiClient.get<PackageVersionDto[]>(`/api/v1/packages/${id}/versions`);
