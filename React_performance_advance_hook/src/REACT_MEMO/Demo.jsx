import { useState } from "react";
import Card from "./Card";
function Demo() {
    console.log("Demo rendred")
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  return (
    <>
      <label htmlFor="state1">state1</label>
      <input
        type="checkbox"
        name=""
        id="state1"
        checked={state1}
        onChange={() => setState1(!state1)}
      />
      <label htmlFor="state2">state2</label>
      <input
        type="checkbox"
        name=""
        id="state2"
        checked={state2}
        onChange={() => setState2(!state2)}
      />
      <Card state1={state1} />
    </>
  );
}

export default Demo;
