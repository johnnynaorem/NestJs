export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export type ProductReturnDTO = {
  products: Product[];
  totalProduct: number;
};
