import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createDto: UserCreateDto) {
    return await this.service.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UserUpdateDto) {
    return await this.service.update(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
