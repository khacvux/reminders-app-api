import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @IsNotEmpty()
  idCategory: string;

  @IsString()
  name: string;

  @IsString()
  theme: string;
}
