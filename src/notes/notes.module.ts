import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notes, NotesSchema } from '../schema/notes.schema';
import { NotesService } from './notes.service';
import { NotesRepository } from './notes.repository';
import { NotesController } from './notes.controller';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notes.name, schema: NotesSchema },
    ]),
  ],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
})
export class NotesModule {}
