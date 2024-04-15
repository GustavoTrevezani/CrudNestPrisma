import { UsersService } from './users.service';
import { Controller, Body, Post, Get, Param, Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUserBody';
import { UpdateUserDto } from './dtos/updateUserBody';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get()
  findAll() {
    console.log('aaaaaaa');
    return this.usersService.findAll();
  }

  @Get('/:id')
  findUnique(@Param('id') id: number): Promise<CreateUserDto> {
    return this.usersService.findUnique({ id: Number(id) });
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    return this.usersService.updateUser({
      where: { id: Number(id) },
      data: updateUserDto,
    });
  }
}
