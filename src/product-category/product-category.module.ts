import { Module } from '@nestjs/common';
import { ProductCategoryController } from './product-category.controller';
import { ProductCategoryService } from './product-category.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProductCategory,
  ProductCategorySchema,
} from 'src/entity/product-category.schema';

@Module({
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
  imports: [
    MongooseModule.forFeature([
      { name: ProductCategory.name, schema: ProductCategorySchema },
    ]),
  ],
})
export class ProductCategoryModule {}
