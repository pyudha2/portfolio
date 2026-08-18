import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import fs from "fs";
import path from "path";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const dbUrl = new URL(process.env.DATABASE_URL as string);

const adapter = new PrismaMariaDb({
  host: dbUrl.hostname,
  port: Number(dbUrl.port) || 3306,
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.replace("/", ""),
  connectionLimit: 3,
  ssl: {
    ca: process.env.AIVEN_CA_CERT
      ? process.env.AIVEN_CA_CERT.replace(/\\n/g, "\n")
      : fs.readFileSync(path.join(process.cwd(), "certs/aiven-ca.pem")).toString(),
  },
});

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter });

globalForPrisma.prisma = prisma;