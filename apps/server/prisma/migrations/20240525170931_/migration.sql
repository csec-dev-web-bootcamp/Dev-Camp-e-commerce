/*
  Warnings:

  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `images` DROP FOREIGN KEY `images_productId_fkey`;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `images`;
