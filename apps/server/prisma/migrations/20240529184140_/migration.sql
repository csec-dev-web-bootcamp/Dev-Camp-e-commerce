/*
  Warnings:

  - You are about to drop the `_orderitemtoproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_orderitemtoproduct` DROP FOREIGN KEY `_OrderItemToProduct_A_fkey`;

-- DropForeignKey
ALTER TABLE `_orderitemtoproduct` DROP FOREIGN KEY `_OrderItemToProduct_B_fkey`;

-- DropIndex
DROP INDEX `orderItems_productId_fkey` ON `orderitems`;

-- AlterTable
ALTER TABLE `orderitems` ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `_orderitemtoproduct`;

-- AddForeignKey
ALTER TABLE `orderItems` ADD CONSTRAINT `orderItems_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
