import { IsNotEmpty, Length } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Length(2, 100)
  email: string;

  @IsNotEmpty()
  password: string;
}
