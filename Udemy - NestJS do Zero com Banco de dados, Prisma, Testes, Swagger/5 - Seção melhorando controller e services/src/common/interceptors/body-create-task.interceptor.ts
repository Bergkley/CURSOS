import { ExecutionContext, NestInterceptor, CallHandler, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BodyCreateInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> { 
  
    const request = context.switchToHttp().getRequest();
    const { method, url,body } = request;

    console.log(`[REQUEST] ${method} ${url}`);
    console.log(`[BODY] ${JSON.stringify(body)}`);
    

    return next.handle()
  }
}