//Program.jsx
"use client";

import { useState } from "react";
import Bandcomponent from "./Bandcomponent";

export default function Program({ bands }) {
  const uniqueGenres = [...new Set(bands.map((band) => band.genre))]; // Completely stole this code, it's hella smart. Set is creating a new array with no duplicate genres.
  console.log(uniqueGenres); //checking wether or not it works

  const [genre, setGenre] = useState("All"); // this is the state that will determine what genre we will display

  const filteredBands =
    genre === "All" ? bands : bands.filter((band) => band.genre === genre); // ternary operator that filters the bands based on the selected genre

  const bandComps = filteredBands.map(
    (
      band // maps through the filtered bands and render the components to display for each
    ) => <Bandcomponent key={band.slug} data={band} />
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
