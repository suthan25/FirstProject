import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class ProductCategoryDTO{
    @IsString()
    @IsNotEmpty()
    categoryName;

    @IsInt()
    @IsNotEmpty()
    status;
}