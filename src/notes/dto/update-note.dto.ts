import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateNoteDto {
    @IsString()
    @IsNotEmpty()
    idNote: string
  
    @IsString()
    note: string;
  
    @IsDate()
    @IsNotEmpty()
    date: Date;
  
    @IsNumber()
    necessity: number;

}