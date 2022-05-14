export class CreateProductDto {
  title: string;
  description?: string;
  price: number;
}

export class UpdateProductDto extends CreateProductDto {
  completedAt: Date;
}
