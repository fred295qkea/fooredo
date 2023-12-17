import CancelledBand from "./CancelledBand";

export const dynamic = "force-dynamic";

// async function getCancel() {
//   const response = await fetch(process.env.NEXT_PUBLIC_URL + "schedule");
//   const data = await response.json();
//   return data;
// }

async function Cancel({ scheduleData }) {
  const schedule = await scheduleData();

  //console.log(schedule);

  return (
    <section className="m-auto p-7 max-w-7xl">
      <CancelledBand schedule={schedule} />
    </section>
  );
}

export default Cancel;
