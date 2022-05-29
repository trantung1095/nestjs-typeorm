import { Module } from '@nestjs/common';
import { ProductCategoriesService } from './productCategories.service';
import { ProductCategoriesController } from './productCategories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ProductCategory from './productCategory.dto';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  providers: [ProductCategoriesService],
  controllers: [ProductCategoriesController],
})
export class ProductCategoriesModule {}
