"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useRef, useState } from "react";
import { Article, ArticleCategory, ArticleUpdateInput } from "../types/model";
import { Editor as TinyMCEInstance } from "tinymce";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

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

interface TinyEditorProps {
  article?: Article; // optional: dùng cho create & edit
}
export default function TinyEditor({ article }: TinyEditorProps) {
  const { data: session, status } = useSession();
  const editorRef = useRef<TinyMCEInstance | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "">("");
  const [summary, setSummary] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [uploadingThumb, setUploadingThumb] = useState(false);
  const [editorReady, setEditorReady] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
   const router = useRouter();
  useEffect(() => {
    if (!article) return;

    setTitle(article.title ?? "");
    setCategory(article.category ?? "");
    setSummary(article.summary ?? "");
    setThumbnail(article.thumbnail ?? "");
    if (editorRef.current && article.htmlContent) {
      editorRef.current.setContent(article.htmlContent);
    } else {
      console.log("editorRef.current:", editorRef.current);
      console.log("article.htmlContent:", article.htmlContent);
      console.log("Editor not ready yet");
    }
  }, [article]);

  useEffect(() => {
    if (!editorReady) return;
    if (!article?.htmlContent) return;
    if (!editorRef.current) return;

    editorRef.current.setContent(article.htmlContent);
  }, [editorReady, article?.htmlContent]);

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
      setThumbnail(data.location);
    } else {
      alert("Upload thumbnail failed");
    }
  };

  const handleSubmit = async () => {
    if (!editorRef.current) return;

    if (article) {
      const content = editorRef.current?.getContent();

      const articleUpdate = {
        title,
        slug: article.slug,
        summary,
        category,
        htmlContent: content,
        thumbnail,
      };

      const res = await fetch("/api/article/" + article.slug, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articleUpdate),
      });

      const data = await res.json();
      if (data.success) {
        alert("Tạo bài viết thành công");
      } else {
        alert("Error: " + data.error);
      }
    } else {
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
        alert("Cập nhật bài viết thành công");
      } else {
        alert("Error: " + data.error);
      }
    }
    router.push('/admin/bai-viet');
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
        <label className="block mb-1 font-medium">Danh mục</label>
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
        <label className="block mb-1 font-medium">Ảnh thumbnail</label>

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
          setEditorReady(true);
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
          // images_upload_url: "/api/upload",
          images_upload_handler: async (blobInfo) => {
            const formData = new FormData();
            formData.append("file", blobInfo.blob(), blobInfo.filename());

            const res = await fetch("/api/upload", {
              method: "POST",
              body: formData,
            });

            const data = await res.json();

            if (!data.location) {
              throw new Error("Upload image failed");
            }

            setUploadedImages((prev) => [...prev, data.location]);

            return data.location;
          },
          automatic_uploads: true,
          images_reuse_filename: false,
        }}
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Lưu bài viết
      </button>
    </div>
  );
}
