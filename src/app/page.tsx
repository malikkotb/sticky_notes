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

      
    </>
  );
}
