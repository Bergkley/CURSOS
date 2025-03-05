import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Meu primeiro Projeto em  NestJs';
  }

  getTeste(): string {
    return 'Rota de teste API';
  }
}
