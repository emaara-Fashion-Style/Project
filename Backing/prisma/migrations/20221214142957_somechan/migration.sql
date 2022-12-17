/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_ID` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_id_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "category_ID",
ADD COLUMN     "Cat_ID" SERIAL NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("Cat_ID");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("Cat_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
