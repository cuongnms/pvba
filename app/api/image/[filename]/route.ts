import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const filePath = path.join(process.cwd(), "data/image", (await params).filename);

  try {
    const buffer = await fs.readFile(filePath);
    return new NextResponse(buffer, {
      headers: { "Content-Type": "image/*" },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
