import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get(':id')
  findOneUser(@Param('id',ParseIntPipe) id: number) {
    return this.userService.findOne(id) 
  }

  @Post()
  create(@Body() createUserDto:CreateUserDto ) {
    return this.userService.create(createUserDto)
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateUserDto:UpdateUserDto) {
    return this.userService.update(id,updateUserDto)
  }

  @Delete(':id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.userService.delete(id)
  }
}
