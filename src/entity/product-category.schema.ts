import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = ProductCategory & Document;

@Schema({
  timestamps: true,
})
export class ProductCategory {
  @Prop({ required: true })
  categoryId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  status: number;
}

export const ProductCategorySchema = SchemaFactory.createForClass(ProductCategory);