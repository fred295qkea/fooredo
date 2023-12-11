//Program.jsx
"use client";

import { useState } from "react";
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
  //console.log(newBands);
  //console.log(schedule);

  const uniqueGenres = [...new Set(bands.map((band) => band.genre))]; // Completely stole this code, it's hella smart. Set is creating a new array with no duplicate genres.
  const [genre, setGenre] = useState("All"); // this is the state that will determine what genre we will display

  let storedFavorites = [];
  const lsKey = "favoriteBands";
  if (typeof window !== "undefined") {
    storedFavorites = JSON.parse(localStorage.getItem(lsKey)) || [];
  }

  const [favorite, setFavorite] = useState(storedFavorites);
  const [showFaves, setShowFaves] = useState(false);

  const uniqueDays = [...new Set(newBands.map((band) => band.day))]; // Completely copied this code from above, it's hella smart. Set is creating a new array with no duplicate days.
  const uniqueDaysHard = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const [dayFilter, setDayFilter] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const toggleFavorite = (bandName) => {
    setFavorite((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(bandName) ? prevFavorites.filter((name) => name !== bandName) : [...prevFavorites, bandName];

      // Save the updated favorites to local storage
      localStorage.setItem(lsKey, JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };
  console.log(favorite);

  // OMEGA FILTERING
  const filteredBands = newBands.filter((band) => (!showFaves || favorite.includes(band.name)) && (genre === "All" || band.genre === genre) && (dayFilter === "All" || band.day === dayFilter) && band.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const bandComps = filteredBands.map(
    (
      band // maps through the filtered bands and render the components to display for each
    ) => (
      <Bandcomponent
        key={band.slug}
        data={band}
        isFavorite={favorite.includes(band.name)} // pass whether the band is a favorite
        toggleFavorite={toggleFavorite} // pass the toggleFavorite function
      />
    )
  );

  return (
    <div className="h-screen">
      <div>
        <label htmlFor="genreFilter">Filter by Genre:</label>
        <select id="genreFilter" onChange={(e) => setGenre(e.target.value)} value={genre}>
          <option value="All">All Genres</option>
          {uniqueGenres.map((uniqueGenre) => (
            <option value={uniqueGenre} key={uniqueGenre}>
              {uniqueGenre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="dayFilter">Filter by Day:</label>
        <select id="dayFilter" onChange={(e) => setDayFilter(e.target.value)} value={dayFilter}>
          <option value="All">All Days</option>
          {uniqueDaysHard.map((uniqueDay) => (
            <option value={uniqueDay} key={uniqueDay}>
              {uniqueDay}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={showFaves} onChange={() => setShowFaves(!showFaves)} />
          Show Favorites
        </label>
      </div>
      <div>
        {/* ... (existing code) */}
        <input type="text" placeholder="Search bands..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="flex flex-col gap-4">
        {filteredBands.length === 0 ? ( // If the filteredBands array is empty, then display a small message for the user
          <p>
            No matching bands found <br />
          </p>
        ) : (
          bandComps
        )}
      </div>
    </div>
  );
}

// http://localhost:8080/schedule

// How to grab cancellations and add that // DONE
// How to link to a singleview something with slugs and Link tags //
// sorting after what time they play
