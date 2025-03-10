import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

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
}
