import { useState } from "react";
import useDebounce from "./useDebounce";

const mockData = [
  {
    name: "foo",
  },
  {
    name: "foo2",
  },
  {
    name: "foo3",
  },
];
const AutoComplete = () => {
  const [data, setData] = useState(null);
  const loadData = async (value) => {
    console.log(value);
    if (value === "") {
      setData(null);
      return;
    }
    // for calling an API
    // const response = await fetch(`http://localhost:8000/data/${value}`);
    // const res = await response.json();
    return setData([value]);
  };
  const loadDataDebounced = useDebounce(loadData, 400);
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
