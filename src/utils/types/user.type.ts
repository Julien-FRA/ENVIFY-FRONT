import { CreateDto } from './base.type';

export type UserDto = {
  id: string;
  username: string;
  email: string;
  password: string;
  lastName?: string | null;
  firstName?: string | null;
  company?: string | null;
};

export type CreateUserDto = CreateDto<UserDto>;

export type UserLogType = {
  email: string;
  password: string;
};

export type UserAuthType = {
  userId: string;
  email: string;
  token: string;
  profil?: string;
};
