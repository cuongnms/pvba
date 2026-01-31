// app/api/upload-image/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const UPLOAD_DIR = "/app/data/image";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
  }

  if (file.size > 5 * 1024 * 1024) {
  return NextResponse.json({ error: "File too large" }, { status: 400 });
}

  const ext = file.name.split(".").pop();
  const filename = `${crypto.randomUUID()}.${ext}`;

  
  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(UPLOAD_DIR, filename), buffer);

  return NextResponse.json({
    location: `${process.env.NEXT_PUBLIC_BASE_URL}/api/image/${filename}`,
  });
}


export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");

  if (!filename) {
    return NextResponse.json(
      { error: "Missing filename" },
      { status: 400 }
    );
  }

  if (filename.includes("..") || filename.includes("/")) {
    return NextResponse.json(
      { error: "Invalid filename" },
      { status: 400 }
    );
  }

  const filePath = path.join(UPLOAD_DIR, filename);

  try {
    await fs.access(filePath); // check tồn tại
    await fs.unlink(filePath);

    return NextResponse.json({
      success: true,
      message: "File deleted",
    });
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return NextResponse.json(
        { error: "File not found" },
        { status: 404 }
      );
    }

    console.error(err);
    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}