//Bandcomponent.jsx

function getRandomCountry() {
  const countries = ["DA", "US", "UK", "SE", "GE"];
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
}

export default function Bandcomponent({ data }) {
  const randomCountry = getRandomCountry();
  //   console.log(randomCountry);
  //   console.log(data.genre);

  return (
    <div className="p-2 bg-blue-200">
      <p></p>
      <p>
        {data.name} - {randomCountry}
      </p>
      <p>{data.genre}</p>
      <span class="material-icons icon">favorite_border</span>
    </div>
  );
}

// Overvej at lave samme procedure med lande som med dage på ugen de spiller
// Find ud af hvordan du laver favorites? Skal der bruges state - nok, men i så fald hvor skal den state ligge? component scoped eller page scoped? Kan vel ikke være page scoped, hvis at vi SKAL hente dataen ned på en "server-side page"
// Samme problematik med at bruge state til genrevalg, det skal vel foregå i map-funktionen på page, og så skal den bare bygge et nyt array, med kun den genre. hmmm.
