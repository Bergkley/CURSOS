import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { LoggerInterceptor } from 'src/common/interceptors/logger.interceptor';
import { BodyCreateInterceptor } from 'src/common/interceptors/body-create-task.interceptor';
import { AddHeaderInteceptor } from 'src/common/interceptors/add-header.interceptor';
import { AuthTokenGuard } from 'src/auth/guard/auth-token.guard';
import { TokenPayloadParam } from 'src/auth/param/token-payload.param';
import { PayloadTokenDto } from 'src/auth/dto/payload-token.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService,
  ) {}
  @Get()

  // @UseGuards(AuthAdminGuard)
  findAllTasks(@Query() paginationDto: PaginationDto) {
    return this.tasksService.findAll(paginationDto);
  }
  @Get(':id')
  findOneTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }
  @UseGuards(AuthTokenGuard)
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto, @TokenPayloadParam() tokenPayload:PayloadTokenDto ) {
    return this.tasksService.create(createTaskDto,tokenPayload);
  }
  @UseGuards(AuthTokenGuard)
  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
    @TokenPayloadParam() tokenPayload:PayloadTokenDto
  ) {
    return this.tasksService.update(id, updateTaskDto,tokenPayload);
  }
  @UseGuards(AuthTokenGuard)
  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number,@TokenPayloadParam() tokenPayload:PayloadTokenDto
) {
    return this.tasksService.delete(id,tokenPayload);
  }
}
