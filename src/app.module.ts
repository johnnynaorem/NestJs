import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
// import AppDataSource from 'data-source';

@Module({
  // imports: [
  //   TypeOrmModule.forRootAsync({
  //     useFactory: async () => ({
  //       ...AppDataSource.options,
  //     }),
  //   }),
  //   ProductModule,
  // ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Johnny02',
      database: 'nestTestDb',
      entities: [Product],
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
