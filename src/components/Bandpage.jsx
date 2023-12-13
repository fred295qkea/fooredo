import Image from "next/image";

export default function Bandpage({ singleviewData, scheduleData }) {
  const fuseData = () => {
    for (const stage in scheduleData) {
      for (const day in scheduleData[stage]) {
        const found = scheduleData[stage][day].find(
          (item) => item.act === singleviewData[0].name
        );

        if (found) {
          return {
            ...singleviewData[0],
            start: found.start,
            end: found.end,
            cancelled: found.cancelled || false,
            stage,
            day,
          };
        }
      }
    }

    // Return a default object if no match is found
    return {};
  };

  const fusedData = fuseData();

  console.log("fusedData", fusedData.logo);

  const bandUrl = fusedData.logo;
  const newBandUrl = bandUrl.startsWith("https://")
    ? bandUrl
    : `http://localhost:8080/logos/${bandUrl}`; // new variable for each logo-attribute // this could easily need to be replaced with process.env.NEXT_PUBLIC_URL
  console.log(newBandUrl);

  return (
    <div>
      <p>fused data something...</p>
    </div>
  );
}
