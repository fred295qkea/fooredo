import Link from "next/link";

function Footer() {
  return (
    <footer className="flex justify-between p-6 mt-6 text-white bg-accent">
      <div className="flex flex-col gap-2">
        <p>@2024 FooFestival</p>
        <p>Location @ Space</p>
        <Link href="https://foo-festival-topaz.vercel.app/" target="_blank" className="underline">
          Get tickets!
        </Link>
      </div>
      <div className="flex flex-col gap-2 ml-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer " width="50" height="50" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9M423 646V378l232 133z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="50" height="50" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
          <path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd" />
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
