import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch/Switch";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import DessertListWrapper from "./DessertList/DessertListWrapper";
import GiftCardPage from "./StateManagement/GiftCardPage";
import FetchUser from "./Effects/FetchUser";
import styled from "styled-components";
import Counter from "./customHooks/Counter";
import Weekday from "./customHooks/Weekday";

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  div {
    border: solid grey 1px;
    padding: 1rem;
    margin: 4px;
  }
`;

const ThemeContainer = styled.div`
  padding: 40px;
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  background-color: ${(props) => (props.theme === "light" ? "white" : "black")};
`;

const Title = ({ children }) => {
  return <h2>{children}</h2>;
};

const Paragraph = ({ children }) => {
  return <p>{children}</p>;
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would make
        me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
      <StyledContainer>
        <DessertListWrapper />
        <GiftCardPage />
        <FetchUser />
        <Counter />
        <Weekday />
      </StyledContainer>
      <RegistrationForm />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <ThemeContainer theme={theme}>
      <Header />
      <Page />
    </ThemeContainer>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
