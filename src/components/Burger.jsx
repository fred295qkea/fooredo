import Link from "next/link";

export default function Burger() {
  return (
    <div className="h-screen w-screen bg-blue-500">
      <ul className="flex flex-col gap-20">
        <Link className="text-4xl" href="/">
          Home
        </Link>
        <Link className="text-4xl" href="/program">
          Program
        </Link>
        <Link className="text-4xl" href="/map">
          Map
        </Link>
      </ul>
    </div>
  );
}
