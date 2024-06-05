import { useRef } from "react";

const InputFileForm = () => {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInput.current.files;
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Get files</h2>
      <input ref={fileInput} type="file"></input>
    </form>
  );
};

export default InputFileForm;
