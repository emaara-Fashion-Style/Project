-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('Admin', 'SupperAdmin', 'User');

-- CreateTable
CREATE TABLE "Users" (
    "UserID" SERIAL NOT NULL,
    "Us_firstname" TEXT NOT NULL,
    "Us_lastname" TEXT NOT NULL,
    "Us_phone" TEXT NOT NULL,
    "Us_address" TEXT NOT NULL,
    "Us_email" TEXT NOT NULL,
    "JiondAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Role" "Roles" NOT NULL DEFAULT 'User',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("UserID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_Us_phone_key" ON "Users"("Us_phone");

-- CreateIndex
CREATE UNIQUE INDEX "Users_Us_email_key" ON "Users"("Us_email");
