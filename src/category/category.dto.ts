export class CreateCategoryDto {
  name: string;
}

export class UpdateCategoryDto extends CreateCategoryDto {
  completedAt: Date;
}
