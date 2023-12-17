"use client";
import useDownloader from "react-use-downloader";

function Downloader() {
  const { download } = useDownloader();

  const fileName = "map.png";
  const fileURL = "/map.png";

  return (
    <button onClick={() => download(fileURL, fileName)} className="p-2 text-center text-white w-fit bg-accent hover:bg-white hover:outline-2 hover:outline-accent hover:outline hover:text-accent">
      Download map
    </button>
  );
}

export default Downloader;
