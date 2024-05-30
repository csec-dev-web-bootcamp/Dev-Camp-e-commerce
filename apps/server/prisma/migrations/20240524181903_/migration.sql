-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_billingAddressId_fkey`;

-- AlterTable
ALTER TABLE `orders` MODIFY `billingAddressId` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_billingAddressId_fkey` FOREIGN KEY (`billingAddressId`) REFERENCES `billing_addresses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
