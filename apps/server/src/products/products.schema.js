<<<<<<< HEAD
import {z} from 'zod';

export const createProductsSchema = z.object({
    name:z.string().min(2).max(50),
    description:z.string().optional,
});
=======
import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().optional(),
});
>>>>>>> c8bfd8e7c21b4333862670d095532b30b064778e
