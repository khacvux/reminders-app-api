import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class QuickNoteDto {
    @IsString()
    note: string;
  
    @IsDate()
    @IsNotEmpty()
    date: Date;
  
    @IsNumber()
    necessity: number;

    @IsNumber()
    status: number

}