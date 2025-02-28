import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Product, ProductReturnDTO } from './models/Product.model';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getProducts')
  getProducts(): ProductReturnDTO {
    return this.appService.GetAllProduct();
  }

  @Post('/create-product')
  createProduct(@Body() product: Product): string {
    return this.appService.CreateProduct(product);
  }

  @Delete('/delete/:id')
  deleteProduct(@Param('id') id: number): Product[] {
    return this.appService.DeleteProduct(id);
  }
}
