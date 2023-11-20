import { z } from 'zod';
import { PostSchema } from './schemas';

export type Post = z.input<typeof PostSchema>;
