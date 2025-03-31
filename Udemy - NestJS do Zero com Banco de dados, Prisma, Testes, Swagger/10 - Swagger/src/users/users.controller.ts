import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthTokenGuard } from 'src/auth/guard/auth-token.guard';
import { Request } from 'express';
import { REQUEST_TOKEN_PAYLOAD } from 'src/auth/common/auth.constants';
import { TokenPayloadParam } from 'src/auth/param/token-payload.param';
import { PayloadTokenDto } from 'src/auth/dto/payload-token.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get(':id')
  findOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @UseGuards(AuthTokenGuard)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    @TokenPayloadParam() tokenPayload: PayloadTokenDto,
  ) {
    return this.userService.update(id, updateUserDto, tokenPayload);
  }
  @UseGuards(AuthTokenGuard)
  @Delete(':id')
  delete(
    @Param('id', ParseIntPipe) id: number,
    @TokenPayloadParam() tokenPayload: PayloadTokenDto,
  ) {
    return this.userService.delete(id, tokenPayload);
  }
  @UseGuards(AuthTokenGuard)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
      schema: {
          type: 'object',
          properties: {
              file: {
                  type: 'string',
                  format: 'binary'
              }
          }
      }
  })
  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  async uploadAvatar(
    @TokenPayloadParam() tokenPayload: PayloadTokenDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /jpeg|jpg|png/g,
        })
        .addMaxSizeValidator({
          maxSize: 3 * (1024 * 1024),
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    return this.userService.uploadAvatarImage(tokenPayload, file);
  }

  // Upload de varias imagens

  // @UseGuards(AuthTokenGuard)
  // @UseInterceptors(FilesInterceptor('file'))
  // @Post('uploads')
  // async uploadMultipleAvatar(@TokenPayloadParam() tokenPayload:PayloadTokenDto,@UploadedFiles() files:Array<Express.Multer.File>) {

  //   files.forEach(async file => {
  //     const fileExtension = path.extname(file.originalname).toLowerCase().substring(1)
  //     const fileName = `$${randomUUID()}.${fileExtension}`

  //     const fileLocale = path.resolve(process.cwd(),'files',fileName)

  //     await fs.writeFile(fileLocale,file.buffer)
  //   })

  //   return 'true'

  // }
}
