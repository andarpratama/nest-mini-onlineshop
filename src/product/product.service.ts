import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  findAll(): any {
    const result = {
      message: 'Success find all',
    };
    return result;
  }

  findOne(id: string): any {
    const result = {
      message: 'Success find one',
      id: id,
    };
    return result;
  }

  create(): any {
    const result = {
      message: 'Success create one',
    };
    return result;
  }

  update(id: string): any {
    const result = {
      message: 'Success update one',
      id: id,
    };
    return result;
  }

  delete(id: string): any {
    const result = {
      message: 'Success delete one',
      id: id,
    };
    return result;
  }
}
