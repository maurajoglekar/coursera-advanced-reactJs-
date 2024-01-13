import DessertsList from "./DessertList";
import styled from "styled-components";
import { useTheme } from "../ThemeContext";

const StyledContainer = styled.div`
  padding: 16px;
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  background-color: ${(props) => (props.theme === "light" ? "white" : "black")};
`;
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function DessertListWrapper() {
  const { theme } = useTheme();
  return (
    <StyledContainer theme={theme}>
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </StyledContainer>
  );
}

export default DessertListWrapper;
