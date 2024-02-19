import React, { useState, useMemo } from "react";
import {format} from "date-fns"
import { finonaciNumber } from "./Febonaci";
import useTime from "./useTime";
function Example1() {
  const [selectNumber, setSelectNumber] = useState(1);

  const fiboNum = useMemo(() => {
    const result = [];
    for (let i = 0; i <= selectNumber; i++) {
      console.log("rendred");
      result[i] = finonaciNumber(i);
    }
    return result;
  }, [selectNumber]);
  const time = useTime();
  return (
    <>
      <h1> {format(time,"hh:mm:ss a")}</h1>
      <input
        type="number"
        value={selectNumber}
        onChange={(e) => setSelectNumber(e.target.value)}
      />
      {selectNumber && (
        <div>
          <h1>first {selectNumber} fibo numbers</h1>
          {fiboNum.join(",")}
        </div>
      )}
    </>
  );
}

export default Example1;
