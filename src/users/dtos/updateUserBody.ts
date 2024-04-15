import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUserBody';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
