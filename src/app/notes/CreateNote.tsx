"use client";
// 'use client' tells Next not to render it on the server but on the browser

import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form>
      <h3 className="text-lg">Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
      placeholder="Content"
      value={content}
      onChange={(e) => setContent(e.target.value)} />
    </form>
  );
}
