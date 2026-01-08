// utils/html.ts
import DOMPurify from "isomorphic-dompurify";
import { JSDOM } from "jsdom";

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
