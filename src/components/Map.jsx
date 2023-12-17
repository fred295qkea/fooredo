import Image from "next/image";
import Downloader from "./Downloader";

export default function Map() {
  return (
    <section className="pt-20 text-white">
      <h1 className="text-3xl text-center my-7">Map</h1>
      <p className="mx-10 text-center">Having trouble finding finding your way around? download the map!</p>
      <div className="p-5 mx-10 my-2 border-2 border-solid rounded-xl border-accent">
        <Image src={"/map.png"} height={900} width={1600} sizes="100wv" alt="Map of festival"></Image>
      </div>
      <div className="text-center">
        <Downloader />
      </div>
    </section>
  );
}
