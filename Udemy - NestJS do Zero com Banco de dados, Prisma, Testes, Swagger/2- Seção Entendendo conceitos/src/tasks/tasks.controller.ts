import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return 'Listando todas as tasks';
  }
  @Get('/test')
  getTask() {
    return 'Listando apenas 1 task';
  }
}
