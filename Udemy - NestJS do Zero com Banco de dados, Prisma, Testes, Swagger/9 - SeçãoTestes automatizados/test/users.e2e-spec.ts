import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app/app.module';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from '../src/tasks/tasks.module';
import { PrismaModule } from '../src/prisma/prisma.module';
import { UsersModule } from '../src/users/users.module';
import { AuthModule } from '../src/auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';

describe('Users (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        imports: [
            ConfigModule.forRoot(),
            TasksModule,
            PrismaModule,
            UsersModule,
            AuthModule,
            ServeStaticModule.forRoot({
              rootPath: join(__dirname, '..', 'files'),
              serveRoot: "/files"
            })
          ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
   
  });
});
