import Link from "next/link";
import Hero from "./Hero";
import Cancel from "./Cancel";
import Live from "./Live";

export default function Frontpage() {
  return (
    <div className=" bg-mainBG">
      <Hero />
      <Cancel />
      <Live />
    </div>
  );
}
