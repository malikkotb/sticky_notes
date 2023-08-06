"use client";
import Link from "next/link";
import SBIcon from "./SBIcon";
import { BiSolidPencil } from "react-icons/bi";

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

async function editNote() {
  console.log("edit the note");
}

export default function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    // transition-transform hover:-translate-y-2 duration-200 for the card, but this kind of distracts
    // <Link href={`/notes/${id}`}>
    <div className={`bg-orange-500 bg-opacity-70 relative text-gray-800 rounded-3xl p-4 shadow-xl w-60 h-60`}>
      <div id="contents">
        <h2 className="font-semibold text-xl pt-4 pb-6">{title}</h2>
        <h5 className="text-base pb-6 font-semibold">{content}</h5>
      </div>
      <div id="dateAndEdit" className="bottom-4 flex items-center justify-between">
        <p className="text-sm">{formatDateAndTime(created)}</p>
        <div
          onClick={editNote}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-black text-white
          hover:bg-transparent hover:text-black
          transition-all duration-300 ease-linear cursor-pointer">
          <BiSolidPencil size="20" />
        </div>
      </div>
    </div>
    // </Link>
  );
}

