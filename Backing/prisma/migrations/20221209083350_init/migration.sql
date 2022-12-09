/*
  Warnings:

  - The values [SupperAdmin] on the enum `Roles` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Us_address` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `Us_email` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `Us_firstname` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `Us_lastname` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `Us_phone` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `UserID` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[U_email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[U_phone]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `U_Address` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `U_email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `U_password` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `U_phone` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Roles_new" AS ENUM ('Admin', 'Supperadmin', 'User');
ALTER TABLE "Users" ALTER COLUMN "Role" DROP DEFAULT;
ALTER TABLE "Users" ALTER COLUMN "Role" TYPE "Roles_new" USING ("Role"::text::"Roles_new");
ALTER TYPE "Roles" RENAME TO "Roles_old";
ALTER TYPE "Roles_new" RENAME TO "Roles";
DROP TYPE "Roles_old";
ALTER TABLE "Users" ALTER COLUMN "Role" SET DEFAULT 'User';
COMMIT;

-- DropIndex
DROP INDEX "Users_Us_email_key";

-- DropIndex
DROP INDEX "Users_Us_phone_key";

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "Us_address",
DROP COLUMN "Us_email",
DROP COLUMN "Us_firstname",
DROP COLUMN "Us_lastname",
DROP COLUMN "Us_phone",
DROP COLUMN "UserID",
ADD COLUMN     "U_Address" TEXT NOT NULL,
ADD COLUMN     "U_email" TEXT NOT NULL,
ADD COLUMN     "U_password" TEXT NOT NULL,
ADD COLUMN     "U_phone" TEXT NOT NULL,
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "userID" SERIAL NOT NULL,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("userID");

-- CreateTable
CREATE TABLE "Order" (
    "order_Id" SERIAL NOT NULL,
    "delivery_price" DOUBLE PRECISION NOT NULL,
    "items_price" DOUBLE PRECISION NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "CreateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UserID" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("order_Id")
);

-- CreateTable
CREATE TABLE "Product" (
    "pro_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "stockQty" INTEGER NOT NULL,
    "UserID" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("pro_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_ID" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_ID")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "Rev_ID" SERIAL NOT NULL,
    "Userid" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("Rev_ID")
);

-- CreateTable
CREATE TABLE "Cart" (
    "Cart_ID" SERIAL NOT NULL,
    "UserID" INTEGER NOT NULL,
    "Pro_ID" INTEGER NOT NULL,
    "Quantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("Cart_ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_U_email_key" ON "Users"("U_email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_U_phone_key" ON "Users"("U_phone");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "Users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "Users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_Userid_fkey" FOREIGN KEY ("Userid") REFERENCES "Users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("pro_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_Pro_ID_fkey" FOREIGN KEY ("Pro_ID") REFERENCES "Product"("pro_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "Users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
