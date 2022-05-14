import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { Category, CategoryDocument } from './category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private readonly model: Model<CategoryDocument>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    return await this.model.findById(id).exec();
  }

  async create(createDto: CreateCategoryDto): Promise<Category> {
    return await new this.model({
      ...createDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateDto: UpdateCategoryDto): Promise<Category> {
    return await this.model
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Category> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
