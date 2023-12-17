"use client";

import { Accordion } from "@ark-ui/react";
import { useState } from "react";

function CancelledBand(props) {
  const [open, setOpen] = useState(false);

  const allActs = [];

  for (const stage in props.schedule) {
    for (const day in props.schedule[stage]) {
      for (const act in props.schedule[stage][day]) {
        allActs.push(props.schedule[stage][day][act]);
      }
    }
  }

  allActs[2].cancelled = true;
  console.log(allActs);

  const cancelled = allActs.filter((act) => act.cancelled);

  return (
    <div className="text-white">
      {cancelled.length == 0 && <p className="text-2xl text-white">Alle acts er klar til at spille</p>}

      <Accordion.Root defaultValue={["React"]} collapsible>
        {["Cancelations"].map((item, id) => (
          <Accordion.Item key={id} value={item}>
            <Accordion.ItemTrigger onClick={() => setOpen(!open)} className="flex justify-between w-full border-b-2 border-white border-solid">
              {cancelled.length == 0 ? (
                <p>{item} - Alle acts er klar til at performe!</p>
              ) : (
                <p>
                  {item} - {cancelled.length} acts have cancelled
                </p>
              )}
              <Accordion.ItemIndicator>{open ? <span className="text-2xl -rotate-90 material-icons icon">arrow_drop_down</span> : <span className="text-2xl material-icons icon">arrow_drop_down</span>}</Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              {cancelled.map((act) => {
                {
                  return <p className="text-white">{act.act}</p>;
                }
              })}
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

export default CancelledBand;
