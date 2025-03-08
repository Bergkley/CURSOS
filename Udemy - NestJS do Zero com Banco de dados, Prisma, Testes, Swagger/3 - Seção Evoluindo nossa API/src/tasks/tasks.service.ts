import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'task 1',
      description: 'description 1',
      completed: false,
    },
  ];
  findAll() {
    return this.tasks;
  }

  findOne(id: string) {
    const task = this.tasks.find((task) => task.id === Number(id));
    if (task) return task;

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
  update(id: string, updateTaskDto: UpdateTaskDto) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));
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
  delete(id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));
    if (taskIndex < 0)
      throw new HttpException(
        'Essa tarefa nao foi encontrada',
        HttpStatus.NOT_FOUND,
      );
    this.tasks.splice(taskIndex, 1);
    return {
      message: 'Tarefa excluida com sucesso',
    }
  }
}
