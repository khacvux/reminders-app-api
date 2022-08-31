import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { CreateNoteDto, UpdateNecessityNoteDto, UpdateNoteDto } from './dto';
import { NotesRepository } from './notes.repository';

@Injectable()
export class NotesService {
  constructor(private notesRepository: NotesRepository) {}

  async listById(idCategory: string) {
    try {
      return this.notesRepository.find({ idCategory });
    } catch (error) {
      throw error;
    }
  }

  async listAll(email: string) {
    try {
      return this.notesRepository.find({ email });
    } catch (error) {
      throw error;
    }
  }

  async createNote(email: string, dto: CreateNoteDto) {
    try {
      return this.notesRepository.create({
        idCategory: dto.idCategory,
        email: email,
        idNote: uuid(),
        note: dto.note,
        date: dto.date,
        necessity: dto.necessity,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateNote(dto: UpdateNoteDto) {
    try {
      return this.notesRepository.findOneAndUpdate(
        { idNote: dto.idNote },
        {
          note: dto.note,
          date: dto.date,
          necessity: dto.necessity,
        },
      );
    } catch (error) {
      throw error;
    }
  }

  async updateNecessity(dto: UpdateNecessityNoteDto) {
    try {
      return this.notesRepository.findOneAndUpdate(
        { idNote: dto.idNote },
        {
          necessity: dto.necessity,
        },
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteNote(idNote: string) {
    try {
      return this.notesRepository.findOneAndDelete({
        idNote,
      });
    } catch (error) {
      throw error;
    }
  }
}
