import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @IsNotEmpty()
  idNote: string;

  @IsString()
  @IsNotEmpty()
  idCategory: string;
}
