// utils/html.ts
import DOMPurify from "isomorphic-dompurify";
import { JSDOM } from "jsdom";
import { ArticleCategory } from "../types/model";

function htmlToText(html: string) {
  const dom = new JSDOM(html);

  return (
    dom.window.document.body.textContent || ""
  )
    .replace(/\s+/g, " ")
    .trim();
}

export function processHtmlContent(rawHtml: string) {
  const cleanHtmlContent = DOMPurify.sanitize(rawHtml, { USE_PROFILES: { html: true } });
  const text = htmlToText(cleanHtmlContent);

  return {
    contentHtml: cleanHtmlContent,
    contentText: text,
    excerpt: text.slice(0, 160)
  };
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // bỏ dấu tiếng Việt
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function getErrorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

export const CATEGORY_LABEL: Record<ArticleCategory, string> = {
  GIOI_THIEU: "GIỚI THIỆU",
  TIN_TUC_SU_KIEN: "TIN TỨC SỰ KIỆN",
  HOAT_DONG: "HOẠT ĐỘNG",
  VAN_HOA: "VĂN HÓA",
  THONG_BAO: "THÔNG BÁO",
};

// Slug trong URL → category enum
export const SLUG_TO_CATEGORY: Record<string, ArticleCategory> = {
  "gioi-thieu": "GIOI_THIEU",
  "tin-tuc": "TIN_TUC_SU_KIEN",
  "hoat-dong": "HOAT_DONG",
  "van-hoa": "VAN_HOA",
  "thong-bao": "THONG_BAO",
};

// Tạo hàm type-safe
export function getCategoryFromSlug(slug: string): ArticleCategory | undefined {
  return SLUG_TO_CATEGORY[slug];
}

export function getLabelFromCategory(category: ArticleCategory): string {
  return CATEGORY_LABEL[category];
}