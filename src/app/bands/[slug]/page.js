// page.js
import { notFound } from "next/navigation";
import Bandpage from "@/components/Bandpage";

export async function generateMetadata({ params }) {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "bands");
  const titleData = await res.json();
  const documentName = titleData.filter((titles) => titles.slug === params.slug);

  // console.log("params slug", params.slug);
  // console.log("titledata: ", documentName);

  return {
    title: documentName[0].name,
    description: `Singleview page for ${documentName[0].name}`,
  };
}

// export async function getBands() {
//   console.log("TJEKKET", params);
//   const response = await fetch(process.env.NEXT_PUBLIC_URL + "bands");
//   const data = await response.json();
//   return data;
// }

// async function getSchedule() {
//   const response = await fetch(process.env.NEXT_PUBLIC_URL + "schedule");
//   const data = await response.json();
//   return data;
// }

export async function generateStaticParams() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "bands");
  const pages = await res.json();
  const paths = pages.map((page) => {
    return { slug: page.slug };
  });
  return paths;
}

export default async function Singleview({ params }) {
  const anotherData = await fetch(process.env.NEXT_PUBLIC_URL + "schedule");
  const scheduleData = await anotherData.json();

  const data = await fetch(process.env.NEXT_PUBLIC_URL + "bands");
  const bandData = await data.json();
  const singleviewData = bandData.filter((bd) => bd.slug === params.slug);
  console.log("band", singleviewData);

  return (
    <main className="min-h-screen ">
      <Bandpage singleviewData={singleviewData} scheduleData={scheduleData} />
    </main>
  );
}
