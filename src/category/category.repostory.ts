import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Category, CategoryDocument } from '../schema/category.schema';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async findOne(categoryFilterQuery: FilterQuery<Category>): Promise<Category> {
    return this.categoryModel.findOne(categoryFilterQuery);
  }

  async find(categoryFilterQuery: FilterQuery<Category>): Promise<Category[]> {
    return this.categoryModel.find(categoryFilterQuery);
  }

  async create(category: Category): Promise<Category> {
    const newCategory = new this.categoryModel(category);
    return newCategory.save();
  }

  async findOneAndUpdate(
    categoryFilterQuery: FilterQuery<Category>,
    category: Partial<Category>,
  ): Promise<Category> {
    return this.categoryModel.findOneAndUpdate(categoryFilterQuery, category, {
      new: true,
    });
  }

  async findOneAndDelete(categoryFilterQuery: FilterQuery<Category>) {
    return this.categoryModel.findOneAndDelete(categoryFilterQuery);
  }
}
