// import { Prisma } from '@repo/prisma-client';
import prisma from "../config/prisma-client";

export async function getManyUsers() {
  const users = await prisma.user.findMany({});
  return users;
}

// export async function getOneuser(slug) {
//   const user = await prisma.user.findFirst({ where: { slug } });
//   return user;
// }

// export async function updateuser(id, data) {
//   const user = await prisma.user.update({
//     where: { id },
//     data: data,
//   });
//   return user;
// }

// export async function deleteuser(id) {
//   const user = await prisma.user.delete({ where: { id } });
//   return user;
// }
