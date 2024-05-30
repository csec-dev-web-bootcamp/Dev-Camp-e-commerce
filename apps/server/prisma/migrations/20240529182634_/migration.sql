-- DropForeignKey
ALTER TABLE `orderitems` DROP FOREIGN KEY `orderItems_productId_fkey`;

-- CreateTable
CREATE TABLE `_OrderItemToProduct` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_OrderItemToProduct_AB_unique`(`A`, `B`),
    INDEX `_OrderItemToProduct_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_OrderItemToProduct` ADD CONSTRAINT `_OrderItemToProduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `orderItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OrderItemToProduct` ADD CONSTRAINT `_OrderItemToProduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
