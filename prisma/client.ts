import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// password: pscale_pw_trTRMHJlTAXFHgO9EaGUraqY4BmSzGHCT43BKL6kROt

// username: 4d8lsd5lnu46a6tdefrf
// DATABASE_URL='mysql://4d8lsd5lnu46a6tdefrf:pscale_pw_trTRMHJlTAXFHgO9EaGUraqY4BmSzGHCT43BKL6kROt@aws.connect.psdb.cloud/issue-tracker?sslaccept=strict'
