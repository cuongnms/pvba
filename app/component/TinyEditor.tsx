"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { ArticleCategory } from "../types/model";

const CATEGORY_OPTIONS: {
  value: ArticleCategory;
  label: string;
}[] = [
  { value: "GIOI_THIEU", label: "Giới thiệu" },
  { value: "TIN_TUC_SU_KIEN", label: "Tin tức & Sự kiện" },
  { value: "HOAT_DONG", label: "Hoạt động" },
  { value: "VAN_HOA", label: "Văn hóa" },
  { value: "THONG_BAO", label: "Thông báo" },
];
export default function TinyEditor() {
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "">("");

  const handleSubmit = () => {
    const content = editorRef.current?.getContent();

    const payload = {
      title,
      category,
      content,
    };

    console.log("Submit data:", payload);
    // TODO: POST lên API / lưu MongoDB
  };
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter title..."
        />
      </div>

      {/* CATEGORY */}
      <div>
        <label className="block mb-1 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as ArticleCategory)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">-- Chọn danh mục --</option>

          {CATEGORY_OPTIONS.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>
      <Editor
        tinymceScriptSrc="/tinymce/tinymce.min.js"
        apiKey="no-api-key"
        licenseKey="gpl"
        onInit={(_, editor) => {
          editorRef.current = editor;
        }}
        init={{
          height: 500,
          menubar: true,
          licenseKey: "gpl",
          plugins:
            "advlist autolink lists link image charmap preview anchor " +
            "searchreplace visualblocks code fullscreen " +
            "insertdatetime media table help wordcount",

          toolbar:
            "undo redo | blocks | " +
            "bold italic underline | forecolor backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | " +
            "link image table | code",
        }}
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Save Post
      </button>
    </div>
  );
}
