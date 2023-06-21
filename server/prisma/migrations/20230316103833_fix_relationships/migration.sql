/*
  Warnings:

  - You are about to drop the column `followingId` on the `Relationship` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[followerId,followedId]` on the table `Relationship` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `followedId` to the `Relationship` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Relationship" DROP CONSTRAINT "Relationship_followingId_fkey";

-- DropIndex
DROP INDEX "Relationship_followerId_followingId_key";

-- AlterTable
ALTER TABLE "Relationship" DROP COLUMN "followingId",
ADD COLUMN     "followedId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Relationship_followerId_followedId_key" ON "Relationship"("followerId", "followedId");

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
