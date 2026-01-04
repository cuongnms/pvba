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
  const cleanHtml = DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: [
      "p", "b", "i", "strong", "em",
      "ul", "ol", "li",
      "h1", "h2", "h3",
      "a", "img", "blockquote"
    ],
    ALLOWED_ATTR: ["href", "src", "alt"],
  });

  const text = htmlToText(cleanHtml);

  return {
    contentHtml: cleanHtml,
    contentText: text,
    excerpt: text.slice(0, 160),
  };
}