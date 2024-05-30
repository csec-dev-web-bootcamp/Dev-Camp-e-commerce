/*
  Warnings:

  - You are about to drop the column `addressLine1` on the `billing_addresses` table. All the data in the column will be lost.
  - You are about to drop the column `addressLine2` on the `billing_addresses` table. All the data in the column will be lost.
  - Added the required column `address` to the `billing_addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `billing_addresses` DROP COLUMN `addressLine1`,
    DROP COLUMN `addressLine2`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL;
