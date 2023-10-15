import {
  PackageDto,
  PackagePropertiesDto,
  PackagePropertiesPackagesId,
} from '../types/package.type';
import { apiClient } from './apiFactory';

export const getPackages = async () =>
  await apiClient.get<PackageDto[]>('/packages');

export const getPackageProperties = async () =>
  await apiClient.get<PackagePropertiesDto[]>(`/config_package_files/`);

export const getPackagePropertiesByPackagesId = async (
  data: PackagePropertiesPackagesId
) =>
  await apiClient.post<PackagePropertiesPackagesId, PackagePropertiesDto[]>(
    `/config_package_files/by_package_version_ids`,
    data
  );
