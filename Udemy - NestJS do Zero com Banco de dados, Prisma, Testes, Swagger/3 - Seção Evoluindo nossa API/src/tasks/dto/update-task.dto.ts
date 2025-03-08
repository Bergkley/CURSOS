import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    readonly name?: string;
    @IsString()
    @IsOptional()
    readonly description?: string;
    @IsBoolean()
    @IsOptional()
    readonly completed?: boolean
}