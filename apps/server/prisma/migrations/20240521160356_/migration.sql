/*
  Warnings:

  - You are about to drop the `product_images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product_images` DROP FOREIGN KEY `product_images_productId_fkey`;

-- DropTable
DROP TABLE `product_images`;
