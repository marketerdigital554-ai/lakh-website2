import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const activeInvestments = await prisma.investment.findMany({
    where: { isActive: true, expiresAt: { gt: new Date() } },
  });

  const now = new Date();

  for (const inv of activeInvestments) {
    const hoursElapsed = (now.getTime() - new Date(inv.lastSettledAt).getTime()) / (1000 * 60 * 60);

    if (hoursElapsed >= 1) {
      const hourlyProfit = (inv.dailyProfit / 24) * Math.floor(hoursElapsed);

      await prisma.$transaction([
        prisma.user.update({
          where: { id: inv.userId },
          data: {
            balance: { increment: hourlyProfit },
            totalEarning: { increment: hourlyProfit },
          },
        }),
        prisma.investment.update({
          where: { id: inv.id },
          data: {
            lastSettledAt: now,
          },
        }),
        prisma.transaction.create({
          data: {
            userId: inv.userId,
            type: "YIELD",
            amount: hourlyProfit,
            status: "APPROVED",
          },
        }),
      ]);
    }
  }

  return NextResponse.json({ status: "Hourly settlements processed." });
}