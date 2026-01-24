"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { ArticleCategory } from "../types/model";
import { Editor as TinyMCEInstance } from "tinymce";
import { useSession } from "next-auth/react";
const CATEGORY_OPTIONS: {
  value: ArticleCategory;
  label: string;
}[] = [
  { value: "gioi-thieu", label: "Giới thiệu" },
  { value: "tin-tuc-su-kien", label: "Tin tức & Sự kiện" },
  { value: "hoat-dong", label: "Hoạt động" },
  { value: "thanh-vien", label: "Thành viên" },
  { value: "thong-bao", label: "Thông báo" },
  { value: "thu-vien", label: "Thư viện" },
];
export default function TinyEditor() {
  const { data: session, status } = useSession();

  const editorRef = useRef<TinyMCEInstance | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "">("");
  const [summary, setSummary] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [uploadingThumb, setUploadingThumb] = useState(false);

  // 🔥 Upload thumbnail
  const handleThumbnailUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    setUploadingThumb(true);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    setUploadingThumb(false);

    const data = await res.json();
    if (data.location) {
      console.log("Thumbnail uploaded to: ", data.location);
      setThumbnail(data.location);
    } else {
      alert("Upload thumbnail failed");
    }
  };

  const handleSubmit = async () => {
    if (!editorRef.current) return;
    const content = editorRef.current?.getContent();
    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const article = {
      title,
      slug,
      summary,
      category,
      htmlContent: content,
      thumbnail,
      authorName: session?.user?.name,
    };

    const res = await fetch("/api/article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    });

    const data = await res.json();
    if (data.success) {
      alert("Article created with ID: " + data.articleId);
    } else {
      alert("Error: " + data.error);
    }
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

      <div>
        <label className="block mb-1 font-medium">Thumbnail</label>

        {thumbnail && (
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-64 h-40 object-cover rounded border mb-2"
          />
        )}

        <label
          htmlFor="thumbnail-upload"
          className="inline-block px-4 py-1 border rounded cursor-pointer hover:bg-gray-100"
        >
          Choose file
        </label>

        <input
          id="thumbnail-upload"
          type="file"
          accept="image/*"
          className="hidden"
          disabled={uploadingThumb}
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handleThumbnailUpload(e.target.files[0]);
            }
          }}
        />

        {uploadingThumb && (
          <p className="text-sm text-gray-500">Uploading thumbnail...</p>
        )}
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
          images_upload_url: "/api/upload",
          automatic_uploads: true,
          images_reuse_filename: false,
          // images_upload_handler: async (blobInfo) => {
          //   const formData = new FormData();
          //   formData.append("file", blobInfo.blob(), blobInfo.filename());

          //   const res = await fetch("/api/upload", {
          //     method: "POST",
          //     body: formData,
          //   });

          //   const data = await res.json();
          //   return data.location;
          // },
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
