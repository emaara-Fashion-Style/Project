/*
  Warnings:

  - You are about to drop the column `description` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `stockQty` on the `Products` table. All the data in the column will be lost.
  - Added the required column `Pro_desc` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Pro_iamse` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Pro_name` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Pro_price` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Pro_qtity` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "description",
DROP COLUMN "discount",
DROP COLUMN "image",
DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "stockQty",
ADD COLUMN     "Pro_desc" TEXT NOT NULL,
ADD COLUMN     "Pro_dic" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "Pro_iamse" TEXT NOT NULL,
ADD COLUMN     "Pro_name" TEXT NOT NULL,
ADD COLUMN     "Pro_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "Pro_qtity" INTEGER NOT NULL;
