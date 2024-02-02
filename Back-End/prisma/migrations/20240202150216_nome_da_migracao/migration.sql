-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `sobrenome` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `cpfOuRg` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `sobre` VARCHAR(191) NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataEdicao` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Student_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
