import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Notes, NotesDocument } from '../schema/notes.schema';

@Injectable()
export class NotesRepository {
  constructor(
    @InjectModel(Notes.name) private notesModel: Model<NotesDocument>,
  ) {}

  async findOne(notesFilterQuery: FilterQuery<Notes>): Promise<Notes> {
    return this.notesModel.findOne(notesFilterQuery);
  }

  async find(notesFilterQuery: FilterQuery<Notes>): Promise<Notes[]> {
    return this.notesModel.find(notesFilterQuery);
  }

  async create(notes: Notes): Promise<Notes> {
    const newNotes = new this.notesModel(notes);
    return newNotes.save();
  }

  async findOneAndUpdate(
    notesFilterQuery: FilterQuery<Notes>,
    notes: Partial<Notes>,
  ): Promise<Notes> {
    return this.notesModel.findOneAndUpdate(notesFilterQuery, notes, {
      new: true,
    });
  }

  async findOneAndDelete(notesFilterQuery: FilterQuery<Notes>) {
    return this.notesModel.findOneAndDelete(notesFilterQuery);
  }
}
