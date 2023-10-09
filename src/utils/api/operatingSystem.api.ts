import { apiClient } from './apiFactory';
import {
  OperatingSystemDto,
  OperatingSystemVersionDto,
} from '../types/operatingSystem.type';

export const getOperatingSystem = async () =>
  await apiClient.get<OperatingSystemDto[]>('/api/v1/os');

export const getOperatingSystemVersions = async (id: number) =>
  await apiClient.get<OperatingSystemVersionDto[]>(`/api/v1/os/${id}/versions`);
