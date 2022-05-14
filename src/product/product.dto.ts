export class BaseProductDto {
  title: string;
  description?: string;
  price: number;
}

export class CreateProductDto extends BaseProductDto {}

export class UpdateProductDto extends BaseProductDto {
  completedAt: Date;
}
