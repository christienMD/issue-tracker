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

// password: pscale_pw_GholilCHDYvPcDwb84zrhot86Tx0RSXynJZR308xmP

// username: o471vgzbnssxicvjwjto
// DATABASE_URL='mysql://o471vgzbnssxicvjwjto:pscale_pw_GholilCHDYvPcDwb84zrhot86Tx0RSXynJZR308xmP@aws.connect.psdb.cloud/issue-tracker?sslaccept=strict'
