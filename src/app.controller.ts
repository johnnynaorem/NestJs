import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Product, ProductReturnDTO } from './models/Product.model';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getProducts')
  getProducts(): ProductReturnDTO {
    return this.appService.GetAllProduct();
  }

  @Get('/filter')
  search(@Query() query: any) {
    return this.appService.FilterProduct(query);
  }

  @Post('/create-product')
  createProduct(@Body() product: Product): string {
    return this.appService.CreateProduct(product);
  }

  @Delete('/delete/:id')
  deleteProduct(@Param('id') id: number): Product[] {
    return this.appService.DeleteProduct(id);
  }

  @Put('/update/:id')
  updateProduct(@Param('id') id: number, @Body() product: Product) {
    const res = this.appService.UpdateProduct(id, product);
    if (res) {
      return res;
    }
    return res;
  }
}
