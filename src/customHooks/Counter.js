import { useState } from "react";
import useConsoleLog from "./useConsoleLog";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: solid grey 1px;
  padding: 1rem;
  margin: 4px;
`;
const Counter = () => {
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <StyledContainer>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Plus 1</button>
    </StyledContainer>
  );
};

export default Counter;
