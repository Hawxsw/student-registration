/*
  Warnings:

  - You are about to drop the column `dataCriacao` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `dataEdicao` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `senhaHash` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `cpfOuRg` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `dataCriacao` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `dataEdicao` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `dataNascimento` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `sobre` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `sobrenome` on the `student` table. All the data in the column will be lost.
  - Added the required column `editDate` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordHash` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpfOrRg` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `editDate` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admin` DROP COLUMN `dataCriacao`,
    DROP COLUMN `dataEdicao`,
    DROP COLUMN `nome`,
    DROP COLUMN `senhaHash`,
    ADD COLUMN `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `editDate` DATETIME(3) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `passwordHash` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `student` DROP COLUMN `cpfOuRg`,
    DROP COLUMN `dataCriacao`,
    DROP COLUMN `dataEdicao`,
    DROP COLUMN `dataNascimento`,
    DROP COLUMN `nome`,
    DROP COLUMN `sobre`,
    DROP COLUMN `sobrenome`,
    ADD COLUMN `about` VARCHAR(191) NULL,
    ADD COLUMN `birthDate` DATETIME(3) NOT NULL,
    ADD COLUMN `cpfOrRg` VARCHAR(191) NOT NULL,
    ADD COLUMN `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `editDate` DATETIME(3) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
