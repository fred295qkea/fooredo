// [slug].js

import Bandpage from "@/components/Bandpage";

export default function Singleview({ bandData, scheduleData }) {
  return (
    <div>
      <Bandpage bandData={bandData} scheduleData={scheduleData} />
    </div>
  );
}

// This function tells Next.js which paths to render at build time
export async function getStaticPaths() {
  // Fetch the list of bands from your API (localhost:8080/bands)
  const response = await fetch(process.env.NEXT_PUBLIC_URL + "bands");
  const bands = await response.json();

  // Create an array of paths using the band slugs
  const paths = bands.map((band) => ({
    params: { slug: band.slug },
  }));

  return { paths, fallback: false };
}

// This function fetches data for a specific band based on the slug
export async function getStaticProps({ params }) {
  // Fetch the band data using the slug
  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + "bands/" + params.slug
  );
  const bandData = await response.json();

  const addResponse = await fetch(
    process.env.NEXT_PUBLIC_URL + "schedule/" + params.slug
  );
  const scheduleData = await addResponse.json();

  return {
    props: {
      bandData,
      scheduleData,
    },
  };
}

// make a component that has the newBands data sent down as props, once we're here, display that component dynamically with the slug
// fetch both endpoints and make the OMEGA-object array again // CANT FIGURE IT OUT
// fetch both endpoints and somehow use them seperatly considering the "act" attribute and "slug" attribute are the same // ???? Is this not the same as above
