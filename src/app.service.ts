import { Injectable } from '@nestjs/common';
import { Product, ProductReturnDTO } from './models/Product.model';

@Injectable()
export class AppService {
  private readonly products: Product[] = [];

  CreateProduct(product: Product): string {
    const count: number = this.products.length;
    product.id = count + 1;
    this.products.push(product);
    return 'Create Product Successfull';
  }

  GetAllProduct(): ProductReturnDTO {
    const productReturn: ProductReturnDTO = {
      totalProduct: this.products.length,
      products: this.products,
    };
    return productReturn;
  }

  DeleteProduct(id: number): Product[] {
    const index = this.products.findIndex((p) => p.id === id);
    return this.products.splice(index, 1);
  }
}
