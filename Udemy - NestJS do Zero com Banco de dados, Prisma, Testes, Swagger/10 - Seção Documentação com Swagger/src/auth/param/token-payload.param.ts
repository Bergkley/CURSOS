import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { REQUEST_TOKEN_PAYLOAD } from "../common/auth.constants";

export const TokenPayloadParam = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const context = ctx.switchToHttp();
        const request = context.getRequest();
        return request[REQUEST_TOKEN_PAYLOAD];
    }
);