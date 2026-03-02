/*
  Warnings:

  - Added the required column `bigThumbnailImg` to the `Stream` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smallThumbnailImg` to the `Stream` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Stream` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stream" ADD COLUMN     "bigThumbnailImg" TEXT NOT NULL,
ADD COLUMN     "smallThumbnailImg" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
