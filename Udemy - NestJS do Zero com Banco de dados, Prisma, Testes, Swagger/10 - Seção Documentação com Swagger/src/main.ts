import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const configSwagger = new DocumentBuilder()
    .setTitle('Lista de tarefas')
    .setDescription('API lista de tarefas')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, configSwagger);

  SwaggerModule.setup('docs', app, documentFactory());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
