export class UserCreateDto {
  name: string;
  email: string;
  password: string;
  phone: number;
  address: string;
}

export class UserUpdateDto extends UserCreateDto {
  completedAt: Date;
}
