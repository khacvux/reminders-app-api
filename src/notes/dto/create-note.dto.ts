import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  idCategory: string;

  @IsString()
  note: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsNumber()
  necessity: number;

  @IsNumber()
  status: number;
}
