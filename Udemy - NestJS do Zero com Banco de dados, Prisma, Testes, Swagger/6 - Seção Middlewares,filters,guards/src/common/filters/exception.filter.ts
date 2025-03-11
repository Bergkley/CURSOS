import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";


@Catch(HttpException)
export class ApiExceptionFilter  implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status = exception.getStatus();
        const errorResponse = exception.getResponse();

        response
            .status(status ? status : 400)
            .json({
                statusCode: status ? status : 400,
                timestamp: new Date().toLocaleString(),
                path: request.url,
                error: errorResponse ? errorResponse : 'Error ao realizar essa operação'
            })
    }
}