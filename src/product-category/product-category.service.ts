import {
  Body,
  Get,
  HttpException,
  HttpStatus,
  Injectable,
  Res,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';
import { Model } from 'mongoose';
import {
  CategoryDocument,
  ProductCategory,
} from 'src/entity/product-category.schema';
import { ProductCategoryDTO } from './dto/product-category.dto';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectModel(ProductCategory.name) private model: Model<CategoryDocument>,
  ) {}

  async addCategory(@Body() body: ProductCategoryDTO): Promise<any> {
    console.log('post', body);
    try {
      const fetchLastCategory = await this.model
        .findOne()
        .sort({ createdAt: -1 }) // sort by createdAt descending
        .exec();
      let catId = '';
      if (fetchLastCategory) {
        let lastValue = fetchLastCategory['categoryId'].split('-')[1];
        let nextValue = String(parseInt(lastValue) + 1);
        catId = 'CAT-' + nextValue.padStart(6, '0');
      } else {
        catId = 'CAT-000001';
      }
      let postData = {
        categoryId: catId,
        name: body.categoryName,
        status: body.status,
      };
      const model = new this.model(postData);
      return await model.save();
    } catch (error) {
      throw new HttpException(
        {
          message: 'Failed to add category !',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getCategories(): Promise<any> {
    try {
      const allCategories = await this.model.find().exec();
      return {
        resCode: '200',
        message: 'All categories fetched successfully !',
        data: allCategories,
      };
    } catch (error) {
      throw new HttpException(
        {
          resCode: '201',
          message: 'Failed to fetch categories !',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
