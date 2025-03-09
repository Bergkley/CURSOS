import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  private tasks: Task[] = [
    {
      id: 1,
      name: 'task 1',
      description: 'description 1',
      completed: false,
    },
  ];
  async findAll() {
    const allTasks = await this.prisma.task.findMany();
    return allTasks;
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findFirst({
      where: {
        id: id,
      }
    })
    if (task?.name) return task;

    throw new HttpException('Essa tarefa não encontrado', HttpStatus.NOT_FOUND);
  }
  create(createTaskDto: CreateTaskDto) {
    const newId = this.tasks.length + 1;
    const newTask = {
      id: newId,
      ...createTaskDto,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }
  update(id: number, updateTaskDto: UpdateTaskDto) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex < 0)
      throw new HttpException(
        'Essa tarefa nao foi encontrada',
        HttpStatus.NOT_FOUND,
      );

    const taskItem = this.tasks[taskIndex];

    this.tasks[taskIndex] = {
      ...taskItem,
      ...updateTaskDto,
    };

    return this.tasks[taskIndex];
  }
  delete(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex < 0)
      throw new HttpException(
        'Essa tarefa nao foi encontrada',
        HttpStatus.NOT_FOUND,
      );
    this.tasks.splice(taskIndex, 1);
    return {
      message: 'Tarefa excluida com sucesso',
    };
  }
}
