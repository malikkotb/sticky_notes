"use client";
import { BsPlus } from "react-icons/bs";
import CreateNote from "../notes/CreateNote";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const bouncingVariant = {
  initial: { x: 0, y: 0 },
  whileTap: {
    x: "-10px", // Moves to the left
    y: "10px", // Moves to the bottom
    scale: 1.2, // Bouncing effect with scaling
    transition: { duration: 0.4 },
  },
};

export default function Sidebar() {
  const [showColors, setShowColors] = useState(false);

  const bouncingVariant = {
    initial: { x: 0, y: 0 },
    whileTap: {
      x: "-50%", // Moves to the left
      y: "50%", // Moves to the bottom
      scale: 1.2, // Bouncing effect with scaling
      transition: { duration: 0.4 },
    },
  };

  function handleChooseColor() {
    // TODO: pass color down as prop to create a new Note
  }

  return (
    <div className="border-r border-gray-300 top-0 left-0 h-screen w-24 m-0 flex flex-col">
      <p className="text-center pt-4 pb-12 font-extrabold">Sticky</p>
      <CreateNote />
      <AniTra />
    </div>
  );
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
function AniTra() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.button
        whileTap={{
          y: -10, // Move up 5 pixels
          rotate: 360, // Rotate 360 degrees
          scale: 1.1,
          transition: { duration: 0.2, damping: 10, stiffness: 200 }, // Add bounciness
        }}
        className="sidebar-icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsPlus size="36" />
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 3,
              delayChildren: 0.3,
              staggerChildren: 0.15,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="pt-6 pb-6 text-center"
      >
        <motion.div
          variants={bouncingVariant}
          initial="initial"
          whileTap="whileTap"
        >
          <motion.li
            variants={itemVariants}
            className="sidebar-color bg-yellow-400 cursor-pointer"
          ></motion.li>
        </motion.div>
        <motion.div
          variants={bouncingVariant}
          initial="initial"
          whileTap="whileTap"
        >
          <motion.li
            variants={itemVariants}
            className="sidebar-color bg-green-400 cursor-pointer"
          ></motion.li>
        </motion.div>
        <motion.div
          variants={bouncingVariant}
          initial="initial"
          whileTap="whileTap"
        >
          <motion.li
            variants={itemVariants}
            className="sidebar-color bg-blue-400 cursor-pointer"
          ></motion.li>
        </motion.div>
        <motion.div
          variants={bouncingVariant}
          initial="initial"
          whileTap="whileTap"
        >
          <motion.li
            variants={itemVariants}
            className="sidebar-color bg-orange-400 cursor-pointer"
          ></motion.li>
        </motion.div>
        <motion.div
          variants={bouncingVariant}
          initial="initial"
          whileTap="whileTap"
        >
          <motion.li
            variants={itemVariants}
            className="sidebar-color bg-indigo-400 cursor-pointer"
          ></motion.li>
        </motion.div>
        
      </motion.ul>
    </motion.nav>
  );
}
