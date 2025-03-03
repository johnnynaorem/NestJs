import { Injectable } from '@nestjs/common';
import { Product, ProductReturnDTO } from './product/models/Product.model';

@Injectable()
export class AppService {
  msg: string = 'helloWorld';

  getMsg(): string {
    return this.msg;
  }
}
