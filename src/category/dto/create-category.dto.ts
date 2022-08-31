import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  @IsString()
  name: string;

  @IsString()
  theme: string;
}
