import CancelledBand from "./CancelledBand";

export const dynamic = "force-dynamic";

async function getCancel() {
  const response = await fetch(process.env.NEXT_PUBLIC_URL + "schedule");
  const data = await response.json();
  return data;
}

async function Cancel() {
  const schedule = await getCancel();

  //console.log(schedule);

  return (
    <section className="m-auto  max-w-7xl">
      <h3 className="text-2xl text-white">Cancels</h3>

      <CancelledBand schedule={schedule} />
    </section>
  );
}

export default Cancel;
