import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Product from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async getAllBrands() {
    return this.productsRepository.query(
      `SELECT properties->'brand' as brand from product`,
    );
  }

  async getBrand(productId: number) {
    return this.productsRepository.query(
      `SELECT properties->'brand' as brand from product WHERE id = $1`,
      [productId],
    );
  }
}
