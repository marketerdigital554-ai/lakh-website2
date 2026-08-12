import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export async function GET() {
  const plans = await prisma.plan.findMany();
  return NextResponse.json(plans);
}
