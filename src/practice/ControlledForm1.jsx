import { useState } from "react";

const ControlledForm1 = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log(`Form submitted with name ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Form with name</h2>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" disabled={!name}>
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default ControlledForm1;
