//Program.jsx
"use client";

import { useState, useEffect } from "react";
import Bandcomponent from "./Bandcomponent";
import Link from "next/link";

export default function Program({ bands, schedule }) {
  const newBands = bands.map((band) => {
    // Variable for handeling newBands - a combination of both the /bands endpoint and the /schedule endpoint
    for (const stage in schedule) {
      for (const day in schedule[stage]) {
        const found = schedule[stage][day].find((item) => item.act == band.name);
        if (found) {
          return {
            ...band,
            ...found,
            day,
            stage,
            cancelled: found.cancelled || false,
          };
        }
      }
    }
    return band; // I dont get 60% of this code, credit is Jonas' it works really well.
  });

  const uniqueGenres = [...new Set(bands.map((band) => band.genre))]; // Completely stole this code, it's hella smart. Set is creating a new array with no duplicate genres.
  const [genre, setGenre] = useState("All"); // this is the state that will determine what genre we will display

  const uniqueDaysHard = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const [dayFilter, setDayFilter] = useState("All");

  const [searchTerm, setSearchTerm] = useState(""); // default value of empty string, this will update onChange of the inputfield - giving new data to the filter logic and re-rendering with said data

  //const [storedFavorites, setStoredFavorites] = useState([]); // line 43 - this empty array is the default value of the favorite state
  const [favorite, setFavorite] = useState([]);
  const lsKey = "favoriteBands";
  useEffect(() => {
    // tries to run on client side
    // This will potentially only run the code on client side - since window is only present on client side.
    const storage = localStorage.getItem(lsKey);
    setFavorite(storage ? JSON.parse(storage) : []); //
  }, []);

  const [showFaves, setShowFaves] = useState(false);

  const toggleFavorite = (bandName) => {
    // This is passed as props to the Bandcomponent, which in turn defines the value of the bandName parameter - these 2 components are talking back and forth
    setFavorite((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(bandName) // if the array includes bandName
        ? prevFavorites.filter((name) => name !== bandName) // removes it with filter
        : [...prevFavorites, bandName]; // else add it with spread

      // Save the updated favorites to local storage
      if (typeof window !== "undefined") {
        localStorage.setItem(lsKey, JSON.stringify(updatedFavorites));
      }

      return updatedFavorites; // this changes the state and will re-render the page accordingly
    });
  };

  // OMEGA FILTERING
  const filteredBands = newBands.filter(
    // Using filter() to iterate over the newBands array and "applying" the conditions below to each band checking if true.
    (band) =>
      // THE GAUNTLET
      (!showFaves || favorite.includes(band.name)) && (genre === "All" || band.genre === genre) && (dayFilter === "All" || band.day === dayFilter) && band.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bandComps = filteredBands.map(
    (
      band // maps through the filtered bands and render the components to display for each
    ) => (
      <Bandcomponent
        key={band.slug} // props
        data={band} // props
        isFavorite={favorite.includes(band.name)} // props
        toggleFavorite={toggleFavorite} // props
      />
    )
  );

  return (
    <section className="pt-24 lg:mx-auto lg:w-2/5">
      <h1 className="text-2xl text-center text-white lg:text-4xl">Program</h1>
      {/* GENRE FILTER */}
      <div className="m-4 cursor-pointer">
        <label htmlFor="genreFilter" className="mb-1 text-sm font-semibold text-white">
          Filter by Genre:
        </label>
        <div className="relative">
          <select id="genreFilter" onChange={(e) => setGenre(e.target.value)} value={genre} className="w-full p-2 transition duration-300 border border-gray-300 rounded-md appearance-none cursor-pointer focus:cursor-pointer focus:outline-none focus:ring focus:border-blue-500">
            <option value="All">All Genres</option>
            {uniqueGenres.map((uniqueGenre) => (
              <option value={uniqueGenre} key={uniqueGenre}>
                {uniqueGenre}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      {/* GENRE FILTER END */}
      {/* GENRE DAY */}
      <div className="m-4">
        <label htmlFor="dayFilter" className="block mb-1 text-sm font-semibold text-white">
          Filter by Day:
        </label>
        <div className="relative">
          <select id="dayFilter" onChange={(e) => setDayFilter(e.target.value)} value={dayFilter} className="block w-full p-2 transition duration-300 border border-gray-300 rounded-md appearance-none cursor-pointer focus:cursor-pointer focus:outline-none focus:ring focus:border-blue-500">
            <option value="All">All Days</option>
            {uniqueDaysHard.map((uniqueDay) => (
              <option value={uniqueDay} key={uniqueDay}>
                {uniqueDay}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      {/* GENRE DAY END */}
      {/* SEARCH BAND */}
      <div className="m-4">
        <label htmlFor="bandSearch" className="block mb-1 text-sm font-semibold text-white">
          Search Bands:
        </label>
        <div className="relative">
          <input type="text" id="bandSearch" placeholder="E.g. The Beatles" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="block w-full p-2 transition duration-300 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:border-blue-500" />
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
            </svg>
          </div>
        </div>
      </div>
      {/* SEARCH BAND END */}
      {/* FAVORITES */}
      <div className="flex items-center justify-center mb-4">
        <input type="checkbox" id="showFaves" checked={showFaves} onChange={() => setShowFaves(!showFaves)} className="hidden" />
        <label htmlFor="showFaves" className="flex items-center space-x-1 text-white cursor-pointer">
          <span className={`material-icons ${showFaves ? "text-red-500" : "text-white"}`}>{showFaves ? "favorite" : "favorite_border"}</span>
          <p>Show Favorites</p>
        </label>
      </div>
      {/* FAVORITES END */}

      <div className="flex flex-col">
        {filteredBands.length === 0 ? ( // If the filteredBands array is empty, then display a small message for the user
          <p>
            No matching bands found <br />
          </p>
        ) : (
          bandComps
        )}
      </div>
    </section>
  );
}

// http://localhost:8080/schedule

// How to grab cancellations and add that // DONE
// How to link to a singleview something with slugs and Link tags // DONE

// sorting after what time they play
// hydration-error - i think we might need to move up the hardcoded countries and prop them down

// styling af hele sitet
// styling af program
// styling af singleview
