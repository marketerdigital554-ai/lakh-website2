import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    title: "About Sunzee Clean Energy Platform",
    mission: "Empowering individuals to participate in clean solar energy production and earn daily distributed profits.",
    technology: [
      { name: "Photon Capture", desc: "Monocrystalline high-yield panels capturing direct solar radiation." },
      { name: "Smart Inverters", desc: "Converting solar DC current directly to localized grid networks." },
      { name: "Telemetry Monitoring", desc: "Real-time updates on daily power output and earnings yield." }
    ],
    payoutRules: "Earnings are generated hourly and can be withdrawn directly to your preferred payment gateway once minimum thresholds are met."
  });
}
