"use client";
import { BiSolidPencil } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

function formatDateAndTime(inputDate: any) {
  const dateObj = new Date(inputDate);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // January is month 0
  const year = dateObj.getFullYear();
  return formatDate(`${day}-${month}-${year}`);
}

function formatDate(inputDate: any) {
  const [day, month, year] = inputDate.split("-");
  return `${new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;
}

export default function Note({ note, bgColor, noteId }: any) {
  const { id, title, content, created } = note || {};

  const [textContent, setTextContent] = useState(content);

  const [showTextArea, setShowTextArea] = useState(false);

  const router = useRouter();


  function editNote() {
    console.log("edit the note");
    setShowTextArea(!showTextArea);
  }

  async function handleBlur() {
    console.log("Textarea lost focus!");
    console.log("Note ID: " + noteId);
    const pb = new PocketBase("http://127.0.0.1:8090");

    // example update data
    const data = {
      content: textContent,
    };

    const record = await pb.collection("notes").update(noteId, data);
    setShowTextArea(!showTextArea);
    router.refresh();

  }

  return (
    // transition-transform hover:-translate-y-2 duration-200 for the card, but this kind of distracts
    // <Link href={`/notes/${id}`}>

    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.5,
      }}
      className={`${bgColor} bg-opacity-70 relative flex flex-col text-gray-800 rounded-3xl p-4 pb-1 w-60 h-60`}
    >
      <div id="contents" className="flex-1">
        {showTextArea && (
          <textarea
            autoFocus
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            onBlur={handleBlur}
            className="h-44 resize-none bg-transparent border-none outline-none"
          />
        )}
        {!showTextArea && (
          <h5 className="text-base pr-4 font-semibold hover:overflow-y-auto overflow-y-hidden h-44">
            {textContent}
          </h5>
        )}
      </div>
      <div
        id="dateAndEdit"
        className="bottom-4 flex items-center mt-auto mb-2 justify-between"
      >
        <p
          className={`text-xs ${
            showTextArea ? "text-transparent" : "text-black"
          }`}
        >
          {formatDateAndTime(created)}
        </p>
        <div
          onClick={editNote}
          className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white
          hover:bg-transparent hover:text-black
          transition-all duration-300 ease-linear cursor-pointer"
        >
          <BiSolidPencil size="18" />
        </div>
      </div>
    </motion.div>
    // </Link>
  );
}
