import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const RATE_LIMIT = 10; // requests
const WINDOW = 60_000; // 1 phút

const ipMap = new Map<string, { count: number; time: number }>();

export function middleware(req: NextRequest) {

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip");
  if (!ip) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const now = Date.now();
  const record = ipMap.get(ip);

  if (!record) {
    ipMap.set(ip, { count: 1, time: now });
    return NextResponse.next();
  }

  if (now - record.time < WINDOW) {
    if (record.count >= RATE_LIMIT) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    record.count++;
  } else {
    ipMap.set(ip, { count: 1, time: now });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/auth/:path*"],
};
