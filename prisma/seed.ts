import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Clear existing plans
  await prisma.plan.deleteMany();

  // Create Sunzee1-style Solar Investment Plans
  await prisma.plan.createMany({
    data: [
      {
        name: "Solar Starter Kit (100W)",
        minPrice: 1000,
        dailyYield: 50, // 5% daily yield
        durationDays: 30,
        hourlyPayout: true,
      },
      {
        name: "Commercial Monocrystalline Array (500W)",
        minPrice: 5000,
        dailyYield: 300, // 6% daily yield
        durationDays: 45,
        hourlyPayout: true,
      },
      {
        name: "Industrial Power Station (2KW)",
        minPrice: 20000,
        dailyYield: 1400, // 7% daily yield
        durationDays: 60,
        hourlyPayout: true,
      },
    ],
  });

  console.log("Database seeded with default investment plans!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());