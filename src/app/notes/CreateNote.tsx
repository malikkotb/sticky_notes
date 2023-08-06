"use client";
// 'use client' tells Next not to render it on the server but on the browser
import PocketBase from "pocketbase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  async function createNote() {
    const pb = new PocketBase("http://127.0.0.1:8090");

    // example create data
    const data = {
      title: title,
      content: content,
    };
    await pb.collection("notes").create(data);

    // reset title and content
    setTitle("");
    setContent("");
    router.refresh();
  }

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Enter a title for your sticky</h3>
          <input autoFocus onChange={(e) => setTitle(e.target.value)} placeholder="Title"
          className="py-4 border-none outline-none"></input>
          <div className="modal-action">
          <button className="btn">Cancel</button>
            <button onClick={createNote} className="btn btn-success">
              Add Sticky
            </button>
          </div>
        </form>
      </dialog>
    </>
    // <div className={`bg-orange-500 bg-opacity-70 text-gray-800 relative transition-transform hover:-translate-y-2 duration-200 rounded-3xl p-4 shadow-xl w-60 h-60`}    >
    //   <form onSubmit={createPost}>
    //     <h3 className="text-lg">Create a new Note</h3>
    //     <input
    //       type="text"
    //       placeholder="Title"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //     />
    //     <textarea
    //       placeholder="Content"
    //       value={content}
    //       onChange={(e) => setContent(e.target.value)}
    //     />
    //     <button type="submit">Create Note</button>
    //   </form>
    // </div>
  );
}

// <div
//   className={`bg-orange-500 bg-opacity-70 text-gray-800 relative transition-transform hover:-translate-y-2 duration-200 rounded-3xl p-4 shadow-xl w-60 h-60`}
// >
//   <h2 className="font-semibold text-xl pt-4 pb-6">{title}</h2>
//   <h5 className="text-base pb-6 font-semibold">{content}</h5>
//   <p className="text-sm absolute bottom-4"></p>
// </div>;
