import { HttpException } from '../common/http-exception';
import prisma from '../common/prisma-client';

export async function createProduct(data) {
  const product = await prisma.product.create({
    data: data,
  });
  return product;
}

export async function getManyProducts(query) {
  const products = await prisma.product.findMany();
  return products;
}

export async function getOneProduct(id) {
  const product = await prisma.product.findFirst({ where: { id } });
  if (!product) {
    throw new HttpException('Product not found', 404);
  }
  return product;
}

export async function updateProduct(id, data) {
  const productExist = await prisma.product.findFirst({ where: { id } });
  if (!productExist) {
    throw new HttpException('Product not found', 404);
  }
  const product = await prisma.product.update({
    where: { id },
    data: data,
  });

  return product;
}

export async function deleteProduct(id) {
  const productExist = await prisma.product.findFirst({ where: { id } });
  if (!productExist) {
    throw new HttpException('Product not found', 404);
  }
  const product = await prisma.product.findFirst({ where: { id } });
  return product;
}
