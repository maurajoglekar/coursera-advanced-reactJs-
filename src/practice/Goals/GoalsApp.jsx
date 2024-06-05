import { useState } from "react";
import GoalForm from "./GoalForm";
import ListOfGoals from "./ListOfGoals";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid black;
`;
const GoalsApp = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };
  return (
    <StyledContainer>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals goals={goals} />
    </StyledContainer>
  );
};

export default GoalsApp;
