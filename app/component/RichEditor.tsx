// "use client";

// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Color from "@tiptap/extension-color";
// import TextAlign from "@tiptap/extension-text-align";
// import { Button } from "@/components/ui/button";
// import { TextStyle } from "@tiptap/extension-text-style";
// import Link from "@tiptap/extension-link";
// import Image from "@tiptap/extension-image";

// export default function RichEditor({
//   value,
//   onChange,
// }: {
//   value: string;
//   onChange: (html: string) => void;
// }) {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       TextStyle,
//       Color,
//       TextAlign.configure({
//         types: ["heading", "paragraph"],
//       }),
//       Link.configure({
//         openOnClick: false,
//       }),
//       Image.configure({
//         inline: false,
//         allowBase64: true, // dùng tạm, production nên upload server
//       }),
//     ],
//     content: value,
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//     immediatelyRender: false,
//   });

//   if (!editor) return null;

//   const addImage = () => {
//     const url = window.prompt("Image URL");
//     if (url) {
//       editor.chain().focus().setImage({ src: url }).run();
//     }
//   };

//   const setLink = () => {
//     const previousUrl = editor.getAttributes("link").href;
//     const url = window.prompt("URL", previousUrl);

//     if (url === null) return;

//     if (url === "") {
//       editor.chain().focus().unsetLink().run();
//       return;
//     }

//     editor.chain().focus().setLink({ href: url }).run();
//   };

//   const setFontSize = (size: string) => {
//     editor.chain().focus().setMark("textStyle", { fontSize: size }).run();
//   };

//   return (
//     <div className="border rounded-md">
//       {/* Toolbar */}
//       <div className="flex flex-wrap gap-2 border-b p-2">
//         <Button
//           size="sm"
//           variant={editor.isActive("bold") ? "default" : "outline"}
//           onClick={() => editor.chain().focus().toggleBold().run()}
//         >
//           B
//         </Button>

//         <Button
//           size="sm"
//           variant={editor.isActive("italic") ? "default" : "outline"}
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//         >
//           I
//         </Button>

//         <Button
//           size="sm"
//           variant={editor.isActive("underline") ? "default" : "outline"}
//           className={`underline`}
//           onClick={() => editor.chain().focus().toggleUnderline().run()}
//         >
//           U
//         </Button>

//         <Button size="sm" variant="outline" onClick={setLink}>
//           Link
//         </Button>

//         <Button size="sm" variant="outline" onClick={addImage}>
//           Image
//         </Button>

//         {/* Font size picker */}
//         <select
//           className="border rounded px-2 py-1 text-sm"
//           onChange={(e) => setFontSize(e.target.value)}
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Font size
//           </option>
//           <option value="12px">12</option>
//           <option value="14px">14</option>
//           <option value="16px">16</option>
//           <option value="20px">20</option>
//           <option value="24px">24</option>
//           <option value="32px">32</option>
//         </select>

//         <Button
//           size="sm"
//           variant="outline"
//           onClick={() => editor.chain().focus().setTextAlign("center").run()}
//         >
//           Center
//         </Button>
//       </div>

//       {/* Editor */}
//       <EditorContent
//         editor={editor}
//         className="prose max-w-none p-4 min-h-[300px]"
//       />
//     </div>
//   );
// }
