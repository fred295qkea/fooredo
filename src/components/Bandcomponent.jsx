//Bandcomponent.jsx

import { useState, useMemo } from "react";

function getRandomCountry() {
  const countries = ["DK", "US", "UK", "SE", "JP", "NO"];
  const countriesIndex = Math.floor(Math.random() * countries.length);
  return countries[countriesIndex];
}

export default function Bandcomponent({ data }) {
  const randomCountry = useMemo(() => getRandomCountry(), []); // [] ensures it only runs once (STOLEN)

  return (
    <div className="p-2 bg-blue-200">
      <p>
        {data.name} - {randomCountry}
      </p>
      <p>{data.genre}</p>
      <p>
        {data.stage} - {data.day} - {data.start}
      </p>

      <button>
        <span class="material-icons icon">STUFF NEEDS TO GO HERE</span>
      </button>
    </div>
  );
}

// Overvej at lave samme procedure med lande som med dage på ugen de spiller - Hvor skal det scopes?

// Find ud af hvordan du laver favorites? Skal der bruges state - nok, men i så fald hvor skal den state ligge? component scoped eller page scoped? Kan vel ikke være page scoped, hvis at vi SKAL hente dataen ned på en "server-side page"
