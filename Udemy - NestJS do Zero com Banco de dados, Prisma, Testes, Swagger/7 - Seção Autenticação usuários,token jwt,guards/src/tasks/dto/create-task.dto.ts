import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @MinLength(5)
    readonly description: string;

   
}