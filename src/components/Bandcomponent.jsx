//Bandcomponent.jsx

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Bandcomponent({ data, isFavorite, toggleFavorite }) {
  const [randomCountry, setRandomCountry] = useState(null);
  useEffect(() => {
    const countries = ["DK", "US", "UK", "SE", "JP", "NO"];
    const countriesIndex = Math.floor(Math.random() * countries.length);
    const selectedCountry = countries[countriesIndex];
    setRandomCountry(selectedCountry);
  }, []);

  const bandUrl = data.logo;
  const newBandUrl = bandUrl.startsWith("https://")
    ? bandUrl
    : process.env.NEXT_PUBLIC_URL + "logos/" + bandUrl;

  console.log(newBandUrl);

  let backgroundColor = "bg-white";

  if (data.cancelled === true) {
    backgroundColor = "bg-red-500";
  }
  const isUnsplashUrl = newBandUrl.includes("unsplash.com");

  return (
    <div className={`m-2 py-2 px-3 flex justify-between ${backgroundColor}`}>
      <Link href={`/bands/${data.slug}`}>
        <div className="flex gap-4">
          <div className="flex items-center">
            {isUnsplashUrl ? (
              <Image
                src={newBandUrl}
                alt={`${data.name} logo`}
                width={50}
                height={50}
                className="object-cover imgcon"
              />
            ) : (
              <img
                src={newBandUrl}
                alt={`${data.name} logo`}
                className="object-cover imgcon"
                style={{ width: 50, height: 50 }}
              />
            )}
          </div>
          <div>
            <div className="">
              <p className="text-sm font-bold">
                {data.name}
                <sup className="text-xs ml-1 font-light">{randomCountry}</sup>
              </p>
            </div>
            <p className="text-sm">{data.genre}</p>
            <p className="text-xs">
              {data.stage} - {data.day} - {data.start}
            </p>
          </div>
        </div>
      </Link>

      <button onClick={() => toggleFavorite(data.name)}>
        {isFavorite ? (
          <span className="material-icons icon text-accent">favorite</span>
        ) : (
          <span className="material-icons icon text-accent">
            favorite_border
          </span>
        )}
      </button>
    </div>
  );
}

// Overvej at lave samme procedure med lande som med dage på ugen de spiller - Hvor skal det scopes?

// Find ud af hvordan du laver favorites? Skal der bruges state - nok, men i så fald hvor skal den state ligge? component scoped eller page scoped? Kan vel ikke være page scoped, hvis at vi SKAL hente dataen ned på en "server-side page"
