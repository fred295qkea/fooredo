import Link from "next/link";
import Hero from "./Hero";
import Cancel from "./Cancel";
import Live from "./Live";

async function getCancel() {
  const response = await fetch(process.env.NEXT_PUBLIC_URL + "schedule");
  const data = await response.json();
  return data;
}

export default function Frontpage() {
  return (
    <div className=" bg-mainBG">
      <Hero />
      <Live scheduleData={getCancel} />
      <Cancel scheduleData={getCancel} />
    </div>
  );
}
