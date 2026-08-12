import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { phone, password, referralCode } = await req.json();

    if (!phone || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { phone } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    let referredById = null;
    if (referralCode) {
      const referrer = await prisma.user.findUnique({ where: { referralCode } });
      if (referrer) referredById = referrer.id;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newReferralCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const user = await prisma.user.create({
      data: {
        phone,
        password: hashedPassword,
        referralCode: newReferralCode,
        referredById,
      },
    });

    const token = signToken({ userId: user.id, role: user.role });

    return NextResponse.json({ token, user: { id: user.id, phone: user.phone, referralCode: user.referralCode } });
  } catch (error) {
    return NextResponse.json({ error: "Server error during registration" }, { status: 500 });
  }
}