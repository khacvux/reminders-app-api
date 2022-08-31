import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateNecessityNoteDto {
    @IsString()
    @IsNotEmpty()
    idNote: string
  
    @IsNumber()
    necessity: number;

}