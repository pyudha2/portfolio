/*
  Warnings:

  - You are about to drop the `techstack` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `project` ADD COLUMN `type` ENUM('FULL', 'GALLERY') NOT NULL DEFAULT 'FULL';

-- DropTable
DROP TABLE `techstack`;

-- CreateTable
CREATE TABLE `ProjectImage` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `projectId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProjectImage` ADD CONSTRAINT `ProjectImage_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
