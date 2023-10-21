/*
  Warnings:

  - You are about to drop the column `stockId` on the `Supplier` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_stockId_fkey";

-- DropIndex
DROP INDEX "Supplier_stockId_key";

-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "supplierId" TEXT;

-- AlterTable
ALTER TABLE "Supplier" DROP COLUMN "stockId";

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
