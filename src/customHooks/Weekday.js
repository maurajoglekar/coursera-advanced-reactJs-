import { useState } from "react";
import { usePrevious } from "./usePrevious";

const Weekday = () => {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };
  return (
    <div style={{ padding: "40px" }}>
      <h3>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h3>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
};

export default Weekday;
