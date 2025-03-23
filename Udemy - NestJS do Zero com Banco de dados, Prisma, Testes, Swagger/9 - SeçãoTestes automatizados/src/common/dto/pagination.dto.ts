import { Type } from "class-transformer"
import { IsInt, IsOptional, Max, Min } from "class-validator"

export class PaginationDto {
    @IsOptional()
    @IsInt()
    @Type(()=> Number)
    @Max(50)
    @Min(0)
    limit: number
    @IsInt()
    @Min(0)
    @Type(()=> Number)
    offset: number
}