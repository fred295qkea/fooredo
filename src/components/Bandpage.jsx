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

  return (
    <div>
      <p>{fusedData.bio}</p>
      <p>
        {fusedData.start} - {fusedData.end}
      </p>
      <p>{fusedData.stage}</p>
      <p>{fusedData.day}</p>
    </div>
  );
}
