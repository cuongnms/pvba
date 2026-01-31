"use client";

import dynamic from "next/dynamic";
import { Article } from "../types/model";

const TinyEditor = dynamic(() => import("@/app/component/TinyEditor"), {
  ssr: false,
});

export default function PostEditor({ article }: { article?: Article }) {
  return (
    <div className="p-8">
      {!article && <h1 className="text-xl font-bold mb-4">Tạo Bài Viết Mới</h1>}
      {article && <h1 className="text-xl font-bold mb-4">Cập Nhật Bài Viết</h1>}

      <TinyEditor article={article} />
    </div>
  );
}
