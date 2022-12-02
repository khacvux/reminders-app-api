import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { CategoryService } from './category.service';
import { GetUser } from '../auth/decorator';
import { CategoryDto, UpdateCategoryDto } from './dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('category')
@ApiTags('Categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @HttpCode(HttpStatus.OK)
  @Post('add')
  @ApiBody({
    type: CategoryDto,
    description: '',
    examples: {
      a: {
        summary: 'Test',
        value: {
          name: 'your name',
          theme: '#FFF',
        } as CategoryDto,
      },
    },
  })
  createCategory(
    @GetUser('email') email: string,
    @Body() dto: CategoryDto,
  ) {
    return this.categoryService.createCategory(email, dto)
  }

  @Post('update')
  @ApiBody({
    type: UpdateCategoryDto,
    description: '',
    examples: {
      a: {
        summary: 'Test',
        value: {
          idCategory: "xx-xxxx-xx-xxxxx",
          name: 'your name',
          theme: '#FFF',
        } as UpdateCategoryDto,
      },
    },
  })
  updateCategory(@Body() dto: UpdateCategoryDto) {
    return this.categoryService.updateCategory(dto);
  }

  @Get('list')
  listCategory(@GetUser('email') email: string) {
    return this.categoryService.list(email);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteCategory(@Param('id') idCategory: string) {
    return this.categoryService.deleteCategory(idCategory);
  }
}
