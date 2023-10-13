import { apiClient } from './apiFactory';
import {
  OperatingSystemDto,
  OperatingSystemVersionDto,
} from '../types/operatingSystem.type';

export const getOperatingSystem = async () =>
  await apiClient.get<OperatingSystemDto[]>('/os');

export const getOperatingSystemVersions = async (id: number) =>
  await apiClient.get<OperatingSystemVersionDto[]>(`/os/${id}/versions`);
