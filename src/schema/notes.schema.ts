import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotesDocument = Notes & Document;

@Schema()
export class Notes {
  @Prop({ required: false })
  idCategory: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  idNote: string;

  @Prop({ required: true })
  note: string;

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ required: true })
  //NUMBER
  // 0 -- OFF
  // 1 --
  // 2 --
  // 3 --
  necessity: number;

  @Prop({ required: true})
  status: number
}

export const NotesSchema =
  SchemaFactory.createForClass(Notes);
