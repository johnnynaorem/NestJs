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

  UpdateProduct(id: number, entity: Product): boolean {
    const isExist: boolean = this.products.find((p) => p.id == id)
      ? true
      : false;
    console.log(isExist);
    if (!isExist) {
      return false;
    }
    return true;
  }

  FilterProduct(query: any) {
    let { category, name, price } = query;
    if (name && category && price) {
      return this.products.filter(
        (p) =>
          p.name.toLowerCase().includes(name.toLowerCase()) &&
          p.category === category &&
          p.price > +price,
      );
    } else if (name && category) {
      return this.products.filter(
        (p) =>
          p.name.toLowerCase().includes(name.toLowerCase()) &&
          p.category === category,
      );
    } else if (price && category) {
      return this.products.filter(
        (p) => p.price > +price && p.category === category,
      );
    } else if (price && name) {
      return this.products.filter(
        (p) =>
          p.name.toLowerCase().includes(name.toLowerCase()) && p.price > +price,
      );
    } else if (name) {
      return this.products.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase()),
      );
    } else if (category) {
      return this.products.filter((p) => p.category === category);
    } else if (price) {
      return this.products.filter((p) => p.price > price);
    }
  }
}
