import { useState } from "react";
import useDebounce, { throttle } from "./useDebounce";

const AutoComplete = () => {
  const [data, setData] = useState([]);

  const loadData = async (value) => {
    console.log(value);
    if (value === "") {
      setData([]);
      return;
    }

    // for calling an API
    // const response = await fetch(`http://localhost:8000/data/${value}`);
    // const res = await response.json();
    return setData([...data, value]);
  };
  const loadDataDebounced = useDebounce(loadData, 400);

  // resizing is throttled
  let counter = 0;
  const resized = (e) => {
    counter++;
    console.log(`resize: ${counter}`);
  };
  const throttledResized = throttle(resized, 1000);
  window.addEventListener("resize", throttledResized);
  return (
    <div>
      <h3>Auto complete with debounce</h3>
      <input type="text" onChange={(e) => loadDataDebounced(e.target.value)} />
      {data && data.length !== 0 && (
        <div>
          {data.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
