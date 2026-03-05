/*
  Warnings:

  - You are about to drop the column `imgPath` on the `items` table. All the data in the column will be lost.
  - Added the required column `image_soruce` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "items" DROP COLUMN "imgPath",
ADD COLUMN     "image_soruce" VARCHAR(255) NOT NULL;
