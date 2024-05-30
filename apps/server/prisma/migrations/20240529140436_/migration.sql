/*
  Warnings:

  - You are about to drop the column `categoryImageUrl` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `categoryName` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_categoryName_fkey`;

-- DropIndex
DROP INDEX `categories_name_key` ON `categories`;

-- AlterTable
ALTER TABLE `categories` DROP COLUMN `categoryImageUrl`,
    DROP COLUMN `url`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `slug` VARCHAR(255) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categoryName`,
    ADD COLUMN `categorySlug` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `categories_slug_key` ON `categories`(`slug`);

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categorySlug_fkey` FOREIGN KEY (`categorySlug`) REFERENCES `categories`(`slug`) ON DELETE SET NULL ON UPDATE CASCADE;
