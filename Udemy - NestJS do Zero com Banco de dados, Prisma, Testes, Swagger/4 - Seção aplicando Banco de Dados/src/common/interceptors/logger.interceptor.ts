import { ExecutionContext,NestInterceptor,CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const resquet = context.switchToHttp().getRequest()
        const method = resquet.method
        const url = resquet.url
        const now = Date.now()

        console.log(`[Request] ${method} ${url} - Inicio da req`)


        return next.handle().pipe(
            tap(() => {
                console.log(`[Response] ${method} ${url} - ${Date.now () - now} ms`)
            })
        )
    }
   
}