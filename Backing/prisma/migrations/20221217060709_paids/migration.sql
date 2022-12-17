/*
  Warnings:

  - You are about to drop the column `isPaid` on the `Order` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Paids" AS ENUM ('isPaid', 'notPaid');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "isPaid",
ADD COLUMN     "Roles" "Paids" NOT NULL DEFAULT 'notPaid';
