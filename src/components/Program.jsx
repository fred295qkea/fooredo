//Program.jsx
"use client";

import { useState } from "react";
import Bandcomponent from "./Bandcomponent";

export default function Program({ bands, schedule }) {
  const uniqueGenres = [...new Set(bands.map((band) => band.genre))]; // Completely stole this code, it's hella smart. Set is creating a new array with no duplicate genres.

  const [genre, setGenre] = useState("All"); // this is the state that will determine what genre we will display

  const lsKey = "favoriteBands";
  const storedFavorites = JSON.parse(localStorage.getItem(lsKey)) || [];
  const [favorite, setFavorite] = useState(storedFavorites);

  console.log(bands);
  console.log(schedule);
  const newBands = bands.map((band) => {
    // Variable for handeling newBands - a combination of both the /bands endpoint and the /schedule endpoint
    for (const stage in schedule) {
      for (const day in schedule[stage]) {
        const found = schedule[stage][day].find(
          (item) => item.act == band.name
        );
        if (found) {
          return {
            ...band,
            ...found,
            day,
            stage,
          };
        }
      }
    }
    return band; // I dont get 60% of this code, credit is Jonas' it works really well.
  });

  const toggleFavorite = (bandName) => {
    setFavorite((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(bandName)
        ? prevFavorites.filter((name) => name !== bandName)
        : [...prevFavorites, bandName];

      // Save the updated favorites to local storage
      localStorage.setItem(lsKey, JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };
  console.log(favorite);

  const filteredBands =
    genre === "All"
      ? newBands
      : newBands.filter((band) => band.genre === genre); // ternary operator that filters the bands based on the selected genre

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
        <select
          id="genreFilter"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        >
          <option value="All">All Genres</option>
          {uniqueGenres.map((uniqueGenre) => (
            <option value={uniqueGenre}>{uniqueGenre}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-4">{bandComps}</div>
    </div>
  );
}

// Figure out how to use the schedule endpoint to add additional information to the list

// http://localhost:8080/schedule

// evt spørg jonas
// Kunne være en ide at basere list-view på "schedule"-API'en og så bruge den "bands"-API'en til singleview, men så er der ikke adgang til genre :////
// deffo spørg jonas
