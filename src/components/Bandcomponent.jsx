//Bandcomponent.jsx

import { useState, useMemo } from "react";
import Link from "next/link";

function getRandomCountry() {
  const countries = ["DK", "US", "UK", "SE", "JP", "NO"];
  const countriesIndex = Math.floor(Math.random() * countries.length);
  return countries[countriesIndex];
}

export default function Bandcomponent({ data, isFavorite, toggleFavorite }) {
  const randomCountry = useMemo(() => getRandomCountry(), []); // [] ensures it only runs once (STOLEN)

  let backgroundColor = "bg-blue-200";

  if (data.cancelled === true) {
    backgroundColor = "bg-red-500";
  }

  return (
    <div className={`p-2 ${backgroundColor}`}>
      <Link href={`/bands/[slug]`} as={`/bands/${data.slug}`}>
        <div>
          <p>
            {data.name} - {randomCountry}
          </p>
          <p>{data.genre}</p>
          <p>
            {data.stage} - {data.day} - {data.start}
          </p>
        </div>
      </Link>

      <button onClick={() => toggleFavorite(data.name)}>
        {isFavorite ? (
          <span className="material-icons icon">favorite</span>
        ) : (
          <span className="material-icons icon">favorite_border</span>
        )}
      </button>
    </div>
  );
}

// Overvej at lave samme procedure med lande som med dage på ugen de spiller - Hvor skal det scopes?

// Find ud af hvordan du laver favorites? Skal der bruges state - nok, men i så fald hvor skal den state ligge? component scoped eller page scoped? Kan vel ikke være page scoped, hvis at vi SKAL hente dataen ned på en "server-side page"
