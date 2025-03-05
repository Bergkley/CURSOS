import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/teste')
  getTeste(): string {
    return this.appService.getTeste();
  }

  @Post('/teste')
  createTest(): string {
    return 'ROTA POST FUNCIONANDO';
  }
}
