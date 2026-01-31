"use client";
import { Article } from "@/app/types/model";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/article")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Danh sách bài viết</h1>
        <Link
          href="/admin/bai-viet/tao-moi"
          className="px-4 py-2 bg-black text-white rounded"
        >
          + Tạo bài viết
        </Link>
      </div>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2 text-left">Tiêu đề</th>
            <th className="border px-3 py-2">Danh mục</th>
            <th className="border px-3 py-2">Ngày tạo</th>
            <th className="border px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {articles && articles.map((a,index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-3 py-2">
                <div className="flex items-center gap-3">
                  {a.thumbnail && (
                    <img
                      src={a.thumbnail}
                      className="w-12 h-8 object-cover rounded"
                    />
                  )}
                  {a.title}
                </div>
              </td>
              <td className="border px-3 py-2 text-center">
                {a.category}
              </td>
              <td className="border px-3 py-2 text-center">
                {new Date(a.createdAt).toLocaleDateString()}
              </td>
              
              <td className="border px-3 py-2 text-center space-x-2">
                <Link
                  href={`/admin/bai-viet/cap-nhat/${a.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {}}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  async function handleDelete(id: string) {
    if (!confirm("Xóa bài viết này?")) return;

    // await fetch(`/api/article/${id}`, { method: "DELETE" });
    // setArticles((prev) => prev.filter((a) => a._id !== id));
  }
}