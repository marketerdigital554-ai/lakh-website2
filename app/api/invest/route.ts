import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyAuth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const auth = verifyAuth(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { planId } = await req.json();
  const plan = await prisma.plan.findUnique({ where: { id: planId } });
  const user = await prisma.user.findUnique({ where: { id: auth.userId } });

  if (!plan || !user) return NextResponse.json({ error: "Data not found" }, { status: 404 });
  if (user.balance < plan.minPrice) {
    return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });
  }

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + plan.durationDays);

  // Execute Transaction & Create Active Investment
  await prisma.$transaction([
    prisma.user.update({
      where: { id: user.id },
      data: { balance: { decrement: plan.minPrice } },
    }),
    prisma.investment.create({
      data: {
        userId: user.id,
        planId: plan.id,
        amount: plan.minPrice,
        dailyProfit: plan.dailyYield,
        expiresAt,
      },
    }),
  ]);

  return NextResponse.json({ message: "Investment activated successfully!" });
}