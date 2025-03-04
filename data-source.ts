import { Product } from 'src/product/product.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Johnny02',
  database: 'test_db',
  entities: [Product],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});

export default AppDataSource;
