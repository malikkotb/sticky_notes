import Link from "next/link";
import {BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'
import SBIcon from "./SBIcon";

export default function Sidebar() {

    function handleAddNote() {
        console.log("Add Note");
      }
      

    return ( 
        // maybe add 'fixed' to div className, but rn that doesnt work
        <div className="border-r border-gray-300 top-0 left-0 h-screen w-16 m-0 flex flex-col">
            <SBIcon icon={<FaFire size="28" />} />
            <SBIcon icon={<BsPlus size="28" />} />
            <SBIcon icon={<BsFillLightningFill size="28" />} />
            <SBIcon icon={<FaPoo size="28" />} />

        </div>
     );
}

{/* <div className="w-16 bg-gray-300 h-screen">
          <button
            className="rounded-full bg-black hover:bg-slate-800 cursor-pointer text-white text-xl w-12 h-12 flex text-center items-center justify-center"
            onClick={handleAddNote}
          >+</button>
          <Link className="px-4 underline py-2" href="/">
            Home
          </Link>
          <Link className="px-4 underline py-2" href="/notes">
            Notes
          </Link>
        </div> */}