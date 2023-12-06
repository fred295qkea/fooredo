import Link from "next/link";

export default function Frontpage() {
  return (
    <div className="flex flex-col items-center h-3/5 justify-center">
      <h1 className="text-4xl text-center mb-16">WELCOME TO FOO FEST!</h1>
      <div>
        <Link className="bg-blue-500 p-2 mx-4" href="/program">
          PROGRAM
        </Link>
        <Link className="bg-blue-500 p-2 mx-4" href="/map">
          MAP
        </Link>
      </div>
    </div>
  );
}
