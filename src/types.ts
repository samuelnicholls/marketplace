import { z } from 'zod';
import { ProductSchema } from './schemas';

export type Product = z.input<typeof ProductSchema>;
