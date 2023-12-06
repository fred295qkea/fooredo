import Link from "next/link";

export default function Tempmenu() {
  return (
    <ul className="flex justify-around">
      <li>
        <Link href={"/"}>HOME</Link>
      </li>
      <li>
        <Link href={"/program"}>PROGRAM</Link>
      </li>
      <li>
        <Link href={"/map"}>MAP</Link>
      </li>
    </ul>
  );
}
