"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export default function TinyEditor() {
  const editorRef = useRef<any>(null);

  return (
    <Editor
        tinymceScriptSrc="/tinymce/tinymce.min.js"
      apiKey="no-api-key" 
      onInit={(_, editor) => (editorRef.current = editor)}
      initialValue="<p>Hello TinyMCE 👋</p>"
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

        branding: false,   // ❌ logo Tiny
        promotion: false, // ❌ popup Finish setup
      }}
    />
  );
}
