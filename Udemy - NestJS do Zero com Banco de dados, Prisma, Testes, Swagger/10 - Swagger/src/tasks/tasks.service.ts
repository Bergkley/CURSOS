import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ResponseTaskDto } from './dto/response-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PayloadTokenDto } from 'src/auth/dto/payload-token.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  async findAll(paginationDto?: PaginationDto): Promise<ResponseTaskDto[]> {
    const { limit = 10, offset = 0 } = paginationDto || {};
    const allTasks = await this.prisma.task.findMany({
      take: limit,
      skip: offset,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return allTasks;
  }

  async findOne(id: number): Promise<ResponseTaskDto> {
    const task = await this.prisma.task.findFirst({
      where: {
        id: id,
      },
    });
    if (task?.name) return task;

    throw new HttpException('Essa tarefa não encontrado', HttpStatus.NOT_FOUND);
  }
  async create(
    createTaskDto: CreateTaskDto,
    tokenPayload: PayloadTokenDto,
  ): Promise<ResponseTaskDto> {
    try {
      const nestTask = await this.prisma.task.create({
        data: {
          name: createTaskDto.name,
          description: createTaskDto.description,
          completed: false,
          userId: tokenPayload.sub,
        },
      });

      return nestTask;
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'Falha ao criar essa tarefa',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async update(
    id: number,
    updateTaskDto: UpdateTaskDto,
    tokenPayload: PayloadTokenDto,
  ): Promise<ResponseTaskDto> {
    try {
      const findTask = await this.prisma.task.findFirst({
        where: {
          id: id,
        },
      });

      if (!findTask) {
        throw new HttpException(
          'Essa tarefa nao foi encontrada',
          HttpStatus.NOT_FOUND,
        );
      }

      if (findTask.userId !== tokenPayload.sub) {
        throw new HttpException('Essa tarefa não existe', HttpStatus.NOT_FOUND);
      }

      const task = this.prisma.task.update({
        where: {
          id: findTask.id,
        },
        data: {
          name: updateTaskDto.name ? updateTaskDto.name : findTask.name,
          description: updateTaskDto.description
            ? updateTaskDto.description
            : findTask.description,
          completed: updateTaskDto.completed
            ? updateTaskDto.completed
            : findTask.completed,
        },
      });

      return task;
    } catch (error) {
      throw new HttpException(
        'Falha ao atualizar essa tarefa',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async delete(id: number, tokenPayload: PayloadTokenDto) {
    try {
      const findTask = await this.prisma.task.findFirst({
        where: {
          id: id,
        },
      });

      if (!findTask) {
        throw new HttpException(
          'Essa tarefa nao foi encontrada',
          HttpStatus.NOT_FOUND,
        );
      }

      if (findTask.userId !== tokenPayload.sub) {
        throw new HttpException(
          'Essa tarefa não existe',
          HttpStatus.BAD_REQUEST,
        );
      }

      await this.prisma.task.delete({
        where: {
          id: findTask.id,
        },
      });

      return { message: 'Tarefa deletada com sucesso' };
    } catch (err) {
      throw new HttpException(
        'Falha ao deletar essa tarefa',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
