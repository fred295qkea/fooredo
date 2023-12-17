"use client";

import { useState } from "react";
import Burger from "./Burger";
import { AnimatePresence } from "framer-motion";

/*useState variable - consists of an array with two variables, the first variable is the "state variable" and the second element in the array is the "update function" which updates the state variable.*/

export default function Navmenu() {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" z-[2] flex items-center justify-center w-10 h-10">
      <button className="flex " onClick={() => setMenu(!menu)}>
        <span className="p-2 bg-pink-600 rounded-full material-icons icon">menu</span>
      </button>
      <AnimatePresence mode="wait">{menu && <Burger />}</AnimatePresence>
    </div>
  );
}
