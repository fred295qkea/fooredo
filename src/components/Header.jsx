import Navmenu from "@/components/Navmenu";
import Image from "next/image";
import Link from "next/link";
Image;

export default function Header() {
  return (
    <header className="">
      <div className="fixed z-30 flex justify-between w-full p-4">
        <Link href="/" className="">
          <Image src="/logo_white.png" height={50} width={50} alt="Logo" sizes="100px" />
        </Link>
        <div>
          <Navmenu />
        </div>
      </div>
    </header>
  );
}
