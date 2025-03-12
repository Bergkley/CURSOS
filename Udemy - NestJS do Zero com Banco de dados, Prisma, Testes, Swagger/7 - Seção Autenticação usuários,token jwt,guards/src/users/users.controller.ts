import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthTokenGuard } from 'src/auth/guard/auth-token.guard';
import { Request } from 'express';
import { REQUEST_TOKEN_PAYLOAD } from 'src/auth/common/auth.constants';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get(':id')
  findOneUser(@Param('id',ParseIntPipe) id: number) {
    console.log('aa', process.env.TOKEN_KEY)
    return this.userService.findOne(id) 
  }

  @Post()
  create(@Body() createUserDto:CreateUserDto ) {
    return this.userService.create(createUserDto)
  }
  @UseGuards(AuthTokenGuard)
  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateUserDto:UpdateUserDto,@Req() req: Request) {
    console.log(req[REQUEST_TOKEN_PAYLOAD])
    return this.userService.update(id,updateUserDto)
  }

  @Delete(':id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.userService.delete(id)
  }
}
