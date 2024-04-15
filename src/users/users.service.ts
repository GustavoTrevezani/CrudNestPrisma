// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PrismaService } from './../database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUserBody';
import { Prisma } from '@prisma/client';
import { UpdateUserDto } from './dtos/updateUserBody';

@Injectable()
export class UsersService {
  constructor(private readonly PrismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.PrismaService.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.PrismaService.user.findMany();
  }

  async findUnique(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    const user = await this.PrismaService.user.findUnique({
      where: userWhereUniqueInput,
    });
    return user;
  }
  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: UpdateUserDto;
  }): Promise<CreateUserDto> {
    const { where, data } = params;
    return this.PrismaService.user.update({
      where,
      data,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<CreateUserDto> {
    return this.PrismaService.user.delete({
      where,
    });
  }
}
