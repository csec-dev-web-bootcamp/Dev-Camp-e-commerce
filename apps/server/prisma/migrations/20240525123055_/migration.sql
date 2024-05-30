/*
  Warnings:

  - You are about to drop the column `categoryId` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_categoryId_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categoryId`,
    ADD COLUMN `categoryName` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `categories_name_key` ON `categories`(`name`);

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categoryName_fkey` FOREIGN KEY (`categoryName`) REFERENCES `categories`(`name`) ON DELETE SET NULL ON UPDATE CASCADE;
