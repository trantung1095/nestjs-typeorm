import { Test, TestingModule } from '@nestjs/testing';
import { ProductCategoriesService } from './productCategories.service';

describe('ProductCategoriesService', () => {
  let service: ProductCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCategoriesService],
    }).compile();

    service = module.get<ProductCategoriesService>(ProductCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
