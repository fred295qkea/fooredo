//Bandcomponent.jsx

function getRandomCountry() {
  const countries = ["DK", "US", "UK", "SE", "JP", "NO"];
  const countriesIndex = Math.floor(Math.random() * countries.length);
  return countries[countriesIndex];
}
// This is overflødigt since we have access to a schedule that we can fetch via API
// function getRandomStage() {
//   const stages = ["Saturn", "Neptun", "Merkur", "Mars", "Julescenen"];
//   const stagesIndex = Math.floor(Math.random() * stages.length);
//   return stages[stagesIndex];
// }

export default function Bandcomponent({ data }) {
  const randomCountry = getRandomCountry();
  // const randomStage = getRandomStage();
  //   console.log(randomCountry);
  //   console.log(data.genre);

  return (
    <div className="p-2 bg-blue-200">
      <p>
        {data.name} - {randomCountry}
      </p>
      <p>{data.genre}</p>

      <span class="material-icons icon">favorite_border</span>
    </div>
  );
}

// Overvej at lave samme procedure med lande som med dage på ugen de spiller - Hvor skal det scopes?

// Find ud af hvordan du laver favorites? Skal der bruges state - nok, men i så fald hvor skal den state ligge? component scoped eller page scoped? Kan vel ikke være page scoped, hvis at vi SKAL hente dataen ned på en "server-side page"
