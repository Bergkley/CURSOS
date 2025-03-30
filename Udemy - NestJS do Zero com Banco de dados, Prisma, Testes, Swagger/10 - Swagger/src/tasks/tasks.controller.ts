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
import { ResponseTaskDto } from './dto/response-task.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  @ApiOperation({ summary: 'Buscar todas as tarefas' })
  @ApiQuery({
    name: 'limit',
    description: 'Quantidade de tarefas por pagina',
    type: Number,
    required: false,
    example: 10,
  })
  @ApiQuery({
    name: 'offset',
    description: 'Quantidade de tarefas a serem puladas',
    type: Number,
    required: false,
    example: 0,
  })
  // @UseGuards(AuthAdminGuard)
  findAllTasks(@Query() paginationDto: PaginationDto) {
    return this.tasksService.findAll(paginationDto);
  }
  @Get(':id')
  @ApiOperation({ summary: 'Buscar por uma unica tarefa' })
  @ApiParam({
    name: 'id',
    description: 'Id da tarefa',
    type: Number,
    required: true,
    example: 1,
  })
  findOneTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }
  @UseGuards(AuthTokenGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Criar uma nova tarefa' })
  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @TokenPayloadParam() tokenPayload: PayloadTokenDto,
  ) {
    return this.tasksService.create(createTaskDto, tokenPayload);
  }
  @UseGuards(AuthTokenGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Atualizar uma tarefa' })
  @ApiParam({
    name: 'id',
    description: 'Id da tarefa',
    type: Number,
    required: true,
  })
  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
    @TokenPayloadParam() tokenPayload: PayloadTokenDto,
  ) {
    return this.tasksService.update(id, updateTaskDto, tokenPayload);
  }
  @UseGuards(AuthTokenGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Deletar uma tarefa' })
  @Delete(':id')
  deleteTask(
    @Param('id', ParseIntPipe) id: number,
    @TokenPayloadParam() tokenPayload: PayloadTokenDto,
  ) {
    return this.tasksService.delete(id, tokenPayload);
  }
}
