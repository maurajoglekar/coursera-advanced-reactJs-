import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../ThemeContext";

const StyledContainer = styled.div`
  padding: 40px;
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  background-color: ${(props) => (props.theme === "light" ? "white" : "black")};
`;

const FetchUser = () => {
  const [user, setUser] = useState([]);
  const { theme } = useTheme();

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(`data: ${JSON.stringify(data)}`);
        setUser(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <StyledContainer theme={theme}>
      <h1>Customer data</h1>
      <h2>Name:{user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt={user.name} />
    </StyledContainer>
  ) : (
    <h1>Data pending...</h1>
  );
};

export default FetchUser;
