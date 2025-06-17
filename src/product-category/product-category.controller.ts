import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryDTO } from './dto/product-category.dto';

@Controller('product-category')
export class ProductCategoryController {
  constructor(private categoryService: ProductCategoryService) {}
  @Get('get-categories')
  async getAllCategory() {
    return await this.categoryService.getCategories();
  }

  @Post('add-category')
  async addCategory(@Body() post: ProductCategoryDTO): Promise<any> {
    console.log('post', post);
    return await this.categoryService.addCategory(post);
  }
}
