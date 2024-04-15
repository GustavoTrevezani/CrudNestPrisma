import { CreateUserDto } from './dtos/createUserBody';
import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}
  @Get('/')
  async getHello(@Body() body: CreateUserDto) {
    const { name, email, password } = body;
    console.log(body);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user;
  }
}
