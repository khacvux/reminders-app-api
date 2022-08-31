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
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from '../auth/guard';
import { CategoryService } from './category.service';
import { GetUser } from '../auth/decorator';
import { CategoryDto, UpdateCategoryDto } from './dto';

@UseGuards(JwtGuard)
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @HttpCode(HttpStatus.OK)
  @Post('add')
  createCategory(@GetUser('email') email: string, @Body() dto: CategoryDto) {
    return this.categoryService.createCategory(email, dto);
  }

  @Post('update')
  updateCategory(@Body() dto: UpdateCategoryDto) {
    return this.categoryService.updateCategory(dto);
  }

  @Get('list')
  listCategory(@GetUser('email') email: string) {
    return this.categoryService.list(email);
  }

  @HttpCode((HttpStatus.NO_CONTENT))
  @Delete(':id')
  deleteCategory(
    @GetUser('email') email: string,
    @Param('id') idCategory: string,
  ){
    return this.categoryService.deleteCategory(idCategory)
  }
}
