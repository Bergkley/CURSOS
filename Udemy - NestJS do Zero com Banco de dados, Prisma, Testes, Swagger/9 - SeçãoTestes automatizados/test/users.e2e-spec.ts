import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
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
import { PrismaService } from 'src/prisma/prisma.service';
import * as dotenv from 'dotenv';
import { execSync } from 'node:child_process';

describe('Users (e2e)', () => {
  let app: INestApplication<App>;
  let prismaService: PrismaService;

  beforeAll(() => {
    dotenv.config();
    execSync('npx prisma migrate deploy');
  });

  beforeEach(async () => {
    execSync(
      'cross-env NODE_ENV=test DATABASE_URL=file:./dev-test.db npx prisma migrate deploy',
    );

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env.test',
        }),
        TasksModule,
        PrismaModule,
        UsersModule,
        AuthModule,
        ServeStaticModule.forRoot({
          rootPath: join(__dirname, '..', 'files'),
          serveRoot: '/files',
        }),
      ],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    prismaService = module.get<PrismaService>(PrismaService);

    await app.init();
  });

  afterEach(async () => {
    await prismaService.user.deleteMany();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('/users', () => {
    it('/users (POST)', async () => {
      const createUserDto = {
        name: 'Berg',
        email: 'berg@gmail.com',
        password: '123456',
      };

      const response = await request(app.getHttpServer())
        .post('/users')
        .send(createUserDto);
      expect(response.body).toEqual({
        id: response.body.id,
        name: 'Berg',
        email: 'berg@gmail.com',
      });
      expect(201);
    });

    it('/users (POST) - weak password',async () => {
      const createUserDto = {
        name: 'Berg',
        email: 'berg1@gmail.com',
        password: '123',
      };

      const response = await request(app.getHttpServer())
        .post('/users')
        .send(createUserDto);
        expect(400);
        expect(response.body.error.message[0]).toEqual('password must be longer than or equal to 6 characters')
    })

    it('/users (PATCH) - update', async () => {
      const createUserDto = {
        name: 'berg teste',
        email: 'bergtest@teste.com',
        password: '123456'
      }

      const updateUserDto = {
        name: 'berg teste2',
      }

      const user = await request(app.getHttpServer())
        .post('/users')
        .send(createUserDto)
        .expect(201)


      const auth = await request(app.getHttpServer())
        .post('/auth')
        .send({
          email: createUserDto.email,
          password: createUserDto.password
        })


      expect(auth.body.user.token).toEqual(auth.body.user.token)

      const response = await request(app.getHttpServer())
        .patch(`/users/${auth.body.user.id}`)
        .set("Authorization", `Bearer ${auth.body.user.token}`)
        .send(updateUserDto)

      expect(response.body).toEqual({
        id: auth.body.user.id,
        name: updateUserDto.name,
        email: createUserDto.email
      })
        })

    })
});
