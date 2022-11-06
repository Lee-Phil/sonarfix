-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `medicalLicense` VARCHAR(191) NOT NULL,
    `birthday` VARCHAR(191) NOT NULL,
    `line1` VARCHAR(191) NOT NULL,
    `line2` VARCHAR(191) NULL,
    `zip` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `type` ENUM('NURSE', 'SUPERVISOR') NOT NULL DEFAULT 'NURSE',

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_line1_key`(`line1`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Request` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supervisorID` INTEGER NOT NULL,
    `nurseID` INTEGER NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `specialization` ENUM('NONE', 'PRIMARY_CARE', 'ADULT_CARE', 'MENTAL_HEALTH', 'PEDIATRICS', 'NEONATOLOGY') NULL DEFAULT 'NONE',
    `line1` VARCHAR(191) NOT NULL,
    `line2` VARCHAR(191) NULL,
    `zip` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191) NULL,
    `status` ENUM('UNFILLED', 'FILLED', 'COMPLETED', 'CANCELLED') NULL DEFAULT 'UNFILLED',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_supervisorID_fkey` FOREIGN KEY (`supervisorID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_nurseID_fkey` FOREIGN KEY (`nurseID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
