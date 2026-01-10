import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
const UPLOAD_DIR = "/app/data/image";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const filePath = path.join(UPLOAD_DIR, (await params).filename);

  try {
    const buffer = await fs.readFile(filePath);
    return new NextResponse(buffer, {
      headers: { "Content-Type": "image/*" },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
