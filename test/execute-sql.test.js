import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it("should be get all data from sample table", async () => {
        const id = 1;
        const name = "Juang Raharjo";

        const result = await prismaClient.$executeRaw`INSERT INTO sample (id, name) VALUES (${id}, ${name})`;
        expect(result).toBe(1);
    })

    
})