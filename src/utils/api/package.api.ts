import { PackageDto, PackagePropertiesDto } from '../types/package.type';
import { apiClient } from './apiFactory';

export const getPackages = async () =>
  await apiClient.get<PackageDto[]>('/packages');

export const getPackageProperties = async () =>
  await apiClient.get<PackagePropertiesDto[]>(`/config_package_files/`);
