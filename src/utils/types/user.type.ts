import { CreateDto } from './base.type';

export type UserDto = {
  id: string;
  username: string;
  email: string;
  password: string;
  last_name?: string | null;
  first_name?: string | null;
  company?: string | null;
};

export type CreateUserDto = CreateDto<UserDto>;

export type UserLogType = {
  email: string;
  password: string;
};

export type UserAuthType = {
  email: string;
  token: string;
  profil?: string;
};
