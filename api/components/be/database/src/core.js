//import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../../../../prisma/generated/client';
// declare global {
//   var prisma: PrismaClient | undefined;
// }

export const prismaCore = new PrismaClient();

// if (process.env.NODE_ENV !== 'production') {
//     global.prisma = prismaCore;
// }
