export class CreateCategoryDto {
  title: string;
  description?: string;
  price: number;
}

export class UpdateCategoryDto extends CreateCategoryDto {
  completedAt: Date;
}
