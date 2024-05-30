import prisma from "../config/prisma-client";

export async function createProduct(data) {
  try {
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        rating: parseFloat(data.rating),
        categorySlug: data.categorySlug,
        images: { create: data.images },
        stockStatus: data.stockStatus,
        quantity: parseInt(data.quantity),
      },
      include: { category: true, images: true },
    });
    return product;
  } catch (error) {
    throw new Error("Failed to create product: " + error.message);
  }
}

export async function getManyProducts() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      images: true,
    },
  });
  return products;
}

export async function getOneProduct(id) {
  const product = await prisma.product.findFirst({
    where: { id },
    include: {
      category: true,
      images: true,
    },
  });
  return product;
}

export async function updateProduct(id, data) {
  const product = await prisma.product.update({
    where: { id },
    data: data,
    include: {
      category: true,
    },
  });
  return product;
}

export async function deleteProduct(id) {
  const product = await prisma.product.delete({
    where: { id },
    include: {
      category: true,
    },
  });
  return product;
}
