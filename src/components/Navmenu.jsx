"use client";

import { useState } from "react";
import Burger from "./Burger";

/*useState variable - consists of an array with two variables, the first variable is the "state variable" and the second element in the array is the "update function" which updates the state variable.*/

export default function Navmenu() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="">
      <button onClick={() => setMenu(!menu)}>
        <span class="material-icons icon">menu</span>
      </button>
      {menu && <Burger />}
    </div>
  );
}
