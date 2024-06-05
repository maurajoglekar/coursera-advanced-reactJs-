import { useState } from "react";
import styled from "styled-components";

const StyledField = styled.div`
  label {
    display: block;
  }

  input,
  textarea {
    width: 75%;
  }

  textarea {
    height: 50px;
  }
`;

const StyledFieldSet = styled.fieldset`
  button {
    margin: 12px auto;
    width: 75%;
    min-height: 40px;
    text-transform: uppercase;
  }
`;
const FeedbackForm1 = () => {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setScore(10);
    setComment("");
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
    }
    console.log(`Form submitted with score: ${score}, comment: ${comment}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledFieldSet>
        <h2>Feedback form</h2>
        <StyledField>
          <label>Score: {score}</label>
          <input
            type="range"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </StyledField>
        <StyledField>
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </StyledField>
        <button type="submit">Submit</button>
      </StyledFieldSet>
    </form>
  );
};
export default FeedbackForm1;
