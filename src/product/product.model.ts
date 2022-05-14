import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  price?: number;

  @Prop()
  completedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = Product & Document;
