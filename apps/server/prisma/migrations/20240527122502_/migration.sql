/*
  Warnings:

  - A unique constraint covering the columns `[paymentRef]` on the table `orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `orders_paymentRef_key` ON `orders`(`paymentRef`);
