//page.js

import Program from "@/components/Program";

export const metadata = {
  title: "Program",
  description: "Program page for Foo festival",
};

async function getBands() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "bands");
  const data = await res.json();
  return data;
}

async function getSchedule() {
  const response = await fetch(process.env.NEXT_PUBLIC_URL + "schedule");
  const data = await response.json();
  return data;
}

export default async function Bandspage() {
  //declaring a variable for the data i fetched
  const bands = await getBands();
  const schedule = await getSchedule();

  // console.log(bands);
  // Here i return a component with the data i fecthed as props
  return (
    <main>
      <Program bands={bands} schedule={schedule} />;
    </main>
  );
}
