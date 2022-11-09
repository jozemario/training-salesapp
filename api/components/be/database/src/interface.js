//import { PrismaClient } from '.prisma/client';
//import { PrismaClient } from '../../../../prisma/generated/client';

//const { PrismaClient } = await import('../prisma/generated/client');
//import { PrismaClient } from '@prisma/client';

//import { PrismaClient } from '../../../../prisma/generated/client';
import { prismaCore } from './core';

const client = () => {
    return prismaCore;
};

export { client };
