import { useRef } from "react";

const RefExample = () => {
  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <>
      <h1>Using useRef hook</h1>
      <input ref={formInputRef} type="text"></input>
      <button onClick={focusInput}> Focus Input</button>
    </>
  );
};

export default RefExample;
