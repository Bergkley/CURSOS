import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { APP_FILTER } from '@nestjs/core';
import { ApiExceptionFilter } from 'src/common/filters/exception.filter';
import { TaskUtils } from './tasks.utils';

@Module({
  controllers: [TasksController],
  providers: [TasksService,TaskUtils, {provide: APP_FILTER, useClass: ApiExceptionFilter}],
  imports:[PrismaModule]
})
export class TasksModule {}
