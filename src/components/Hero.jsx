import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="grid w-full">
      <Image className="w-full col-start-1 col-end-1 row-start-1 row-end-1" src="/foobg.png" alt="Hero image" width={16} height={9} sizes="100wv" priority />
      <div className="grid col-start-1 col-end-1 row-start-1 row-end-1 place-content-center">
        <h1 className="mb-5 text-2xl text-center text-white lg:text-6xl">Welcome to Foo Fest</h1>
        <div className="flex flex-row justify-center gap-5">
          <Link className="w-32 p-2 text-center text-white transition-all bg-accent hover:bg-white hover:outline-2 hover:outline-accent hover:outline hover:text-accent" href="/program">
            PROGRAM
          </Link>
          <Link className="w-32 p-2 text-center text-white bg-accent hover:bg-white hover:outline-2 hover:outline-accent hover:outline hover:text-accent" href="/map">
            MAP
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
