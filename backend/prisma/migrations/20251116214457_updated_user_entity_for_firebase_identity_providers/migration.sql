-- CreateTable
CREATE TABLE "User" (
    "uid" VARCHAR(28) NOT NULL,
    "email" TEXT,
    "displayName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
