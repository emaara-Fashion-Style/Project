/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_Pro_ID_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_UserID_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_product_id_fkey";

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "Products" (
    "pro_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "stockQty" INTEGER NOT NULL,
    "UserID" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("pro_id")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "Users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("Cat_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("pro_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_Pro_ID_fkey" FOREIGN KEY ("Pro_ID") REFERENCES "Products"("pro_id") ON DELETE RESTRICT ON UPDATE CASCADE;
