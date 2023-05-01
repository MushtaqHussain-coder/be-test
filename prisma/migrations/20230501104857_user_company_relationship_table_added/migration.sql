-- CreateTable
CREATE TABLE "CompaniesOnUsers" (
    "userId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "CompaniesOnUsers_pkey" PRIMARY KEY ("userId","companyId")
);

-- AddForeignKey
ALTER TABLE "CompaniesOnUsers" ADD CONSTRAINT "CompaniesOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompaniesOnUsers" ADD CONSTRAINT "CompaniesOnUsers_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
