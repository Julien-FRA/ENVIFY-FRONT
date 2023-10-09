import {
  CreateUserDto,
  UserAuthType,
  UserDto,
  UserLogType,
} from '../types/user.type';
import { apiAuthClient } from './apiFactory';

export const userAuthenticate = async (data: UserLogType) =>
  await apiAuthClient.post<UserLogType, UserAuthType>('/login', data);

export const userRegister = async (data: CreateUserDto) =>
  await apiAuthClient.post<CreateUserDto, UserDto>('/create', data);
