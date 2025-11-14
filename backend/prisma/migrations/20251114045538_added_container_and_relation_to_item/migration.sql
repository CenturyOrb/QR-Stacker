-- AlterTable
ALTER TABLE "items" ADD COLUMN     "container_id" INTEGER;

-- CreateTable
CREATE TABLE "containers" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "containers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_container_id_fkey" FOREIGN KEY ("container_id") REFERENCES "containers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
