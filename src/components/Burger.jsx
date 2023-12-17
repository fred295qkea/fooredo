"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { menuSlide, navSlide, navs } from "./anim";
export default function Burger(props) {
  const navs = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "Program",
      link: "/program",
    },
    {
      id: 2,
      name: "Map",
      link: "/map",
    },
  ];

  return (
    <motion.div variants={menuSlide} animate="enter" exit="exit" initial="initial" className="fixed top-0 right-0 z-[-1] h-[100vh] bg-blue-500 w-80 p-10 my-auto flex  ">
      <ul className="flex flex-col justify-center gap-10">
        {navs.map((item) => {
          return (
            <motion.div variants={navSlide} animate="enter" exit="exit" initial="initial" key={item.id}>
              <Link onClick={() => props.setMenu(!props.menu)} className="transition-all translate-x-56 hover:text-white hover:origin-left hover:underline hover:underline-offset-4 " href={item.link}>
                {item.name}
              </Link>
            </motion.div>
          );
        })}
      </ul>
    </motion.div>
  );
}
