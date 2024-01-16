import Image from "next/image";

function Livecard({ liveact, img, text }) {
  return (
    <article className="my-8 text-white border w-80 first:translate-y-6 last:translate-y-3">
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
