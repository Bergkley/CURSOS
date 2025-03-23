import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from 'src/tasks/tasks.module';
import { UsersModule } from 'src/users/users.module';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';

@Module({
  imports: [TasksModule, UsersModule,ConfigModule.forRoot(), AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','..', 'files'),
      serveRoot: "/files"
    }),
  ],
  controllers: [AppController],
  providers: [AppService,
    // {provide:APP_GUARD,useClass:AuthAdminGuard}
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes({
          path: '*',
          method: RequestMethod.ALL
      })
  }
}
