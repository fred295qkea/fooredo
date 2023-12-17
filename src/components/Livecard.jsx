import Image from "next/image";

function Livecard({ liveact, img, text }) {
  return (
    <article className="text-white border w-96">
      <Image src={img} width={300} height={300} sizes="50vw" alt="Live image from concert" className="object-cover w-full aspect-video" />
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-xl uppercase">{liveact.act} - Live</h3>
        <p className="self-end">
          {liveact.act + " "}
          {text}
        </p>
      </div>
    </article>
  );
}

export default Livecard;
