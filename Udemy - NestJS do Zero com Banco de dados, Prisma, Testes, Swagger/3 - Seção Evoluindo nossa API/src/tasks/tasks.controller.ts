import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  getTasks() {
    return this.tasksService.listAllTask();
  }
  @Get('/1')
  getTask() {
    return this.tasksService.findOneTask();
  }
}
