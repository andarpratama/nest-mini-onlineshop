import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createDto: CreateCategoryDto) {
    return await this.service.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateCategoryDto) {
    return await this.service.update(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
