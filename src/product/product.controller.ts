import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('Product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createDto: CreateProductDto) {
    return await this.service.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateProductDto) {
    return await this.service.update(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
