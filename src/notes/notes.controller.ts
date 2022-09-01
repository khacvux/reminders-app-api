import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { NotesService } from './notes.service';
import { GetUser } from '../auth/decorator';
import {
  CreateNoteDto,
  UpdateCategoryDto,
  UpdateNecessityNoteDto,
  UpdateNoteDto,
} from './dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { QuickNoteDto } from './dto/quick-note.dto';

@UseGuards(JwtGuard)
@Controller('notes')
@ApiTags('Notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @HttpCode(HttpStatus.OK)
  @Post('add')
  @ApiBody({
    type: CreateNoteDto,
    description: 'example missing property `Date`',
    examples: {
      a: {
        summary: 'Test',
        value: {
          idCategory: 'get id at ../category/list',
          note: 'content...',
          necessity: 0,
          status: 0,
        } as CreateNoteDto,
      },
    },
  })
  createNote(
    @GetUser('email') email: string,
    @Body() dto: CreateNoteDto,
  ) {
    return this.notesService.createNote(email, dto);
  }

  @Get('list/:id')
  listByIdCategory(@Param('id') idCategory: string) {
    return this.notesService.listById(idCategory);
  }

  @Get('list/all')
  listAll(@GetUser('email') email: string) {
    return this.notesService.listAll(email);
  }

  @Post('update')
  @ApiBody({
    type: UpdateNoteDto,
    description: 'example missing property `Date`',
    examples: {
      a: {
        summary: 'Test',
        value: {
          idNote: 'xxxx-xx-x-xx--x',
          note: 'content....',
          necessity: 0,
          status: 0,
        } as UpdateNoteDto,
      },
    },
  })
  updateNote(@Body() dto: UpdateNoteDto) {
    return this.notesService.updateNote(dto);
  }

  @Post('update-necessity')
  @ApiBody({
    type: UpdateNecessityNoteDto,
    description: '',
    examples: {
      a: {
        summary: 'Test',
        value: {
          idNote: 'xxxx-xx-x-xx--x',
          necessity: 0,
        } as UpdateNecessityNoteDto,
      },
    },
  })
  updateNecessity(@Body() dto: UpdateNecessityNoteDto) {
    return this.notesService.updateNecessity(dto);
  }

  @Delete(':id')
  deleteNote(@Param('id') idNote: string) {
    return this.notesService.deleteNote(idNote);
  }

  @Post('quick/add')
  @ApiBody({
    type: QuickNoteDto,
    description: 'example missing property `Date`',
    examples: {
      a: {
        summary: 'Test',
        value: {
          note: 'content...',
          necessity: 0,
          status: 0,
        } as QuickNoteDto,
      },
    },
  })
  quickNote(
    @Body() dto: QuickNoteDto,
    @GetUser('email') email: string,
  ) {
    return this.notesService.quickNote(email, dto);
  }

  @Get('quick/list')
  listQuickNote(@GetUser('email') email: string) {
    return this.notesService.listQuickNote(email);
  }

  @Post('update-category')
  @ApiBody({
    type: UpdateCategoryDto,
    examples: {
      a: {
        summary: 'Test',
        value: {
          idNote: '',
          idCategory: '',
        } as UpdateCategoryDto,
      },
    },
  })
  updateCategory(@Body() dto: UpdateCategoryDto) {
    return this.notesService.updateCategory(dto);
  }
}
