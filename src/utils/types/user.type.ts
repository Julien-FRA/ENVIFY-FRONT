export type UserCreateDto = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type UserDto = {
  email: string;
  password: string;
};
