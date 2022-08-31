import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Notes & Document;

@Schema()
export class Notes {
  @Prop({ required: true })
  idCategory: string;

  @Prop({ required: true })
  idNote: string;

  @Prop({ required: true })
  notes: string;

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ required: true })
  //NUMBER
  // 1 --
  // 2 --
  // 3 --
  necessity: number;
}

export const NotesSchema = SchemaFactory.createForClass(Notes);
