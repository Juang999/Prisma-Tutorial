import {PrismaClient} from "@prisma/client";

describe("test prisma connection", () => {
    it('will test prisma connection', async () => {
        const prisma = new PrismaClient();
        await prisma.$connect();

        // do something

        await prisma.$disconnect();
    })
});