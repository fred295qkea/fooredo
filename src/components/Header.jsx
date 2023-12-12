import Navmenu from "@/components/Navmenu";

export default function Header() {
  return (
    <header className="">
      <div className="flex items-center">
        <div className="mx-auto">LOGO</div>
        <div>
          <Navmenu />
        </div>
      </div>
    </header>
  );
}
