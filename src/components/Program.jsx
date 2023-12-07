//Program.jsx
"use client";

import { useState } from "react";
import Bandcomponent from "./Bandcomponent";

export default function Program({ bands, schedule }) {
  const uniqueGenres = [...new Set(bands.map((band) => band.genre))]; // Completely stole this code, it's hella smart. Set is creating a new array with no duplicate genres.
  console.log(uniqueGenres); //checking wether or not it works

  //   const scheduleData = bands;
  //   const bandsData = schedule;

  console.log(bands);
  console.log(schedule);
  const newBands = bands.map((band) => {
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

  console.log("new band", newBands);

  const [genre, setGenre] = useState("All"); // this is the state that will determine what genre we will display

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
        isFavorite={favorite.includes(band.name)}
        toggleFavorite={toggleFavorite}
      />
    )
  );

  const [favorite, setFavorite] = useState([]);

  const toggleFavorite = (bandName) => {
    setFavorite((prevFavorites) => {
      if (prevFavorites.includes(bandName)) {
        return prevFavorites.filter((name) => name !== bandName);
      } else {
        return [...prevFavorites, bandName];
      }
    });
  };

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
