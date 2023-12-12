//Bandcomponent.jsx

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

function getRandomCountry() {
  const countries = ["DK", "US", "UK", "SE", "JP", "NO"];
  const countriesIndex = Math.floor(Math.random() * countries.length);
  return countries[countriesIndex];
}

export default function Bandcomponent({ data, isFavorite, toggleFavorite }) {
  // console.log("bandcomponent data:", data);
  const randomCountry = useMemo(() => getRandomCountry(), []); // [] ensures it only runs once (STOLEN)

  const bandUrl = data.logo;
  const newBandUrl = bandUrl.startsWith("https://")
    ? bandUrl
    : `http://localhost:8080/logos/${bandUrl}`; // new variable for each logo-attribute // this could easily need to be replaced with process.env.NEXT_PUBLIC_URL
  // console.log(newBandUrl);

  let backgroundColor = "bg-blue-200";

  if (data.cancelled === true) {
    backgroundColor = "bg-red-500";
  }

  return (
    <div className={`p-2 flex justify-between  ${backgroundColor}`}>
      <Link href={`/bands/[slug]`} as={`/bands/${data.slug}`}>
        <div className="flex gap-4">
          <div className="grid items-center">
            <Image
              className=""
              src={newBandUrl}
              alt={`${data.name} logo`}
              width={100}
              height={100}
            />
          </div>

          <div>
            <p>
              {data.name} - {randomCountry}
            </p>
            <p>{data.genre}</p>
            <p>
              {data.stage} - {data.day} - {data.start}
            </p>
          </div>
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
