import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repostory';
import { CategoryDto, UpdateCategoryDto } from './dto';
import { uuid } from 'uuidv4';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async createCategory(email: string, dto: CategoryDto) {
    try {
      return this.categoryRepository.create({
        idCategory: uuid(),
        name: dto.name,
        theme: dto.theme,
        email,
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteCategory(idCategory: string) {
    try {
      return this.categoryRepository.findOneAndDelete({
        idCategory: idCategory,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateCategory(dto: UpdateCategoryDto) {
    try {
      return this.categoryRepository.findOneAndUpdate({ idCategory: dto.idCategory }, dto);
    } catch (error) {
      throw error;
    }
  }

  async list(email: string) {
    try {
      return this.categoryRepository.find({ email });
    } catch (error) {
      throw error;
    }
  }
}
