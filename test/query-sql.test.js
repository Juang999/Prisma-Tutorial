import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it("should be get all data from sample table", async () => {
        const id = 1;

        const samples = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;
        
        for (const sample of samples) {
            console.info(`Result sample_id: ${sample.id} and name ${sample.name}`);
        }
    })
})