import {z} from 'zod';

export const createProductsSchema = z.object({
    name:z.string().min(2).max(50),
    description:z.string().optional,
});