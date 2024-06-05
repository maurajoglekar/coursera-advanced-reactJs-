import { useState } from "react";

/* Example of useState.  Always create a copy of the state var then use the set
to update it.  */
const GoalForm = (props) => {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(formData);
    console.log(`Adding this form data: ${formData.goal}, ${formData.by}`);
    setFormData({ goal: "", by: "" });
  };

  return (
    <>
      <h2>My Little Lemon Goals</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="By"
          name="by"
          value={formData.by}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default GoalForm;
