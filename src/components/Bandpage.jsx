import Image from "next/image";
import Tempmenu from "./Tempmenu";

export default function Bandpage({ bandData, scheduleData }) {
  //   console.log(bandData);
  //   console.log(scheduleData);

  const fusedData = { ...bandData, cancelled: false }; // new object COPY

  for (const stage in scheduleData) {
    // outer loop which loops through each stage in the object
    const dayAndEvents = Object.entries(scheduleData[stage]).find(
      // I dont get it, but its something with making [key, value]-pairs from the "day" and "event" which will in turn be checked for a match between band.name and schedule.act
      ([day, events]) => events.some((event) => event.act === bandData.name) // some() will return true if one element in the array matches the condition which in this case is event.act === bandData.name
    );

    if (dayAndEvents) {
      // if a match is found do:
      const [day, events] = dayAndEvents;

      const matchingEvent = events.find((event) => event.act === bandData.name); // destructuring?

      if (matchingEvent) {
        // assigning values to fusedData
        fusedData.day = day;
        fusedData.stage = stage;
        fusedData.start = matchingEvent.start;
        fusedData.end = matchingEvent.end;
        fusedData.cancelled = matchingEvent.cancelled || false;
      }

      break; // break the loop - NO RETURN??????
    }
  }

  console.log(fusedData); // log

  const bandUrl = fusedData.logo;
  const newBandUrl = bandUrl.startsWith("https://")
    ? bandUrl
    : `http://localhost:8080/logos/${bandUrl}`; // new variable for each logo-attribute // this could easily need to be replaced with process.env.NEXT_PUBLIC_URL
  console.log(newBandUrl);

  return (
    <div>
      <Tempmenu />
      <div>
        <Image
          src={newBandUrl}
          alt={`${fusedData.name} logo`}
          width={520}
          height={400}
        />
        <p>{fusedData.bio}</p>
        <p>
          {fusedData.start} - {fusedData.end}
        </p>
        <p>{fusedData.stage}</p>
        <p>{fusedData.day}</p>
      </div>
    </div>
  );
}
