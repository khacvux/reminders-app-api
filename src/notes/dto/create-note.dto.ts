import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  idCategory: string;

  @IsString()
  note: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsNumber()
  necessity: number;

  @IsNumber()
  status: number;
}
