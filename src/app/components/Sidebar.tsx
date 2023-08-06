"use client";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import SBIcon from "./SBIcon";
import CreateNote from "../notes/CreateNote";
declare global {
  interface Window {
    my_modal_1: any;
  }
}
export default function Sidebar() {

  return (
    <div className="border-r border-gray-300 top-0 left-0 h-screen w-24 m-0 flex flex-col">
      {/* The button to open the create note modal */}

      

      <p className="text-center py-4 font-extrabold">Sticky</p>
      <CreateNote />
      <button className="" onClick={() => window.my_modal_1.showModal()}>
        <SBIcon
          icon={<BsPlus size="36" />}
          showTooltip
          text={"Create Sticky"}
        />{" "}
      </button>
      {/* <SBIcon icon={<FaFire size="28" />} />
      <label htmlFor="my_modal_7" className="">
        <SBIcon
          icon={<BsPlus size="36" />}
          showTooltip
          text={"Create Sticky"}
        />
      </label>
      <SBIcon icon={<BsFillLightningFill size="20" />} />
      <SBIcon icon={<FaPoo size="20" />} /> */}
    </div>
  );
}
