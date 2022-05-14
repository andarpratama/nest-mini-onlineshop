import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly model: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return await this.model.findById(id).exec();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return await new this.model({
      ...createProductDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.model
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Product> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
