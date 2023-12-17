import Livecard from "./Livecard";

async function Live({ scheduleData }) {
  const schedule = await scheduleData();
  const liveActs = [];

  for (const stage in schedule) {
    for (const day in schedule[stage]) {
      for (const act in schedule[stage][day]) {
        liveActs.push(schedule[stage][day][act]);
      }
    }
  }

  return (
    <section className="mb-5 ">
      <h3 className="mb-4 text-2xl text-center text-white">Live now</h3>
      <div className="flex flex-row flex-wrap justify-center gap-10 mx-10 lg:mx-20 md:mx-40">
        <Livecard img="/liveimg2.jpg" liveact={liveActs[0]} text="might be the most exiting new name this year!" />
        <Livecard img="/liveimg1.jpg" liveact={liveActs[1]} text="are one of the lead names on the festival, find out why right now!" />
        <Livecard img="/liveimg.jpg" liveact={liveActs[2]} text="are playing a whole unreleased album right now!" />
      </div>
    </section>
  );
}

export default Live;
