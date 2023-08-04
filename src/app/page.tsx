'use client';
import { useState } from "react";
export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseExit() {
    setIsHovering(false);
  }

  return (
    <>
      <h1 className="text-3xl p-6">Home</h1>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        className="transition-transform hover:-translate-y-2 duration-200 bg-gray-400 rounded-lg p-4 shadow-2xl w-80 h-60"
      >
        <video width="500" height="300" muted={isHovering} autoPlay>
          <source src="./dance.mp4" type="video/mp4" />
          This browser doesn't support video tag.
        </video>
      </div>
    </>
  );
}
