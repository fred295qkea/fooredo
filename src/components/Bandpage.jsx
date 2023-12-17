import Image from "next/image";
import Biosection from "./Biosection";

export default function Bandpage({ singleviewData, scheduleData }) {
  const countries = ["DK", "US", "UK", "SE", "JP", "NO"];
  const countriesIndex = Math.floor(Math.random() * countries.length);
  const randomCountry = countries[countriesIndex];
  const dayAbbreviationsToFull = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
  };

  const fuseData = () => {
    for (const stage in scheduleData) {
      for (const day in scheduleData[stage]) {
        const found = scheduleData[stage][day].find((item) => item.act === singleviewData[0].name);

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

  const abbreviatedDay = fusedData.day; // Replace with your actual data

  const fullDayName = dayAbbreviationsToFull[abbreviatedDay] || abbreviatedDay;

  // console.log("fusedData", fusedData);

  const bandUrl = fusedData.logo;
  const newBandUrl = bandUrl.startsWith("https://") ? bandUrl : process.env.NEXT_PUBLIC_URL + "logos/" + bandUrl; // new variable for each logo-attribute // this could easily need to be replaced with process.env.NEXT_PUBLIC_URL
  console.log(newBandUrl);

  const isUnsplashUrl = newBandUrl.includes("unsplash.com");

  return (
    <div className="grid gap-4 pt-20 mx-4 text-white md:w-2/5 md:mx-auto lg:w-2/5 lg:mx-auto">
      <div>
        <h2 className="text-2xl font-bold">
          {fusedData.name}
          <sup className="ml-1 text-xs font-light">{randomCountry}</sup>
        </h2>
        <h3 className="text-lg">{fusedData.genre}</h3>
      </div>
      <div className="flex flex-row items-center gap-8 ">
        <div className="flex items-center">{isUnsplashUrl ? <Image src={newBandUrl} alt={`${fusedData.name} logo`} width={300} height={300} className="object-cover" /> : <img src={newBandUrl} alt={`${fusedData.name} logo`} className="object-cover" />}</div>
        <div className="flex flex-col gap-6 ml-4 text-accent ">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024" className="cursor-pointer hover:text-white">
            <path fill="currentColor" d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9M423 646V378l232 133z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className="cursor-pointer hover:text-white">
            <path fill="currentColor" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
            <path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className="cursor-pointer hover:text-white">
            <path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
          </svg>
        </div>
      </div>

      <div>
        <Biosection bio={fusedData.bio} />
      </div>
      <div className="m-4">
        {fusedData.cancelled ? (
          <p className="text-2xl text-center text-red-500 errormsg">CANCELLED</p>
        ) : (
          <p className="text-xl text-center errormsg">
            {fullDayName} - {fusedData.start} <br /> {fusedData.stage}
          </p>
        )}
      </div>
      <div className="flex flex-wrap mt-10">{fusedData.logoCredits ? <p className="text-xxxxs">Photo {fusedData.logoCredits}</p> : <p className="text-xs">No logo credits.</p>}</div>
    </div>
  );
}
