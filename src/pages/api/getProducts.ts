import { ProductSchema } from '@/schemas';
import { z } from 'zod';

const getProducts = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=10&offset=0');
  const products = await response.json();
  return z.array(ProductSchema).parse(products);
};

export default getProducts;
