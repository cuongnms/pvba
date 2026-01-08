"use client";

import dynamic from "next/dynamic";

const TinyEditor = dynamic(
  () => import("@/app/component/TinyEditor"),
  { ssr: false }
);

export default function PostEditor() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Post Editor</h1>
      <TinyEditor />
    </div>
  );
}
