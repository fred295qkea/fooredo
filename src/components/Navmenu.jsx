"use client";

import { useState } from "react";
import Burger from "./Burger";
import { AnimatePresence } from "framer-motion";

/*useState variable - consists of an array with two variables, the first variable is the "state variable" and the second element in the array is the "update function" which updates the state variable.*/

export default function Navmenu() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="fixed z-[2] flex items-center justify-center w-10 h-10 top-3 right-3 ">
      <button className="flex " onClick={() => setMenu(!menu)}>
        <span class="material-icons icon bg-pink-600 rounded-full p-2">menu</span>
      </button>
      <AnimatePresence mode="wait">{menu && <Burger />}</AnimatePresence>
    </div>
  );
}
