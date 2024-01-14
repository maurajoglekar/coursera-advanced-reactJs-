import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import DessertListWrapper from "./DessertList/DessertListWrapper";
import GiftCardPage from "./StateManagement/GiftCardPage";
import FetchUser from "./Effects/FetchUser";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThemeContainer = styled.div`
  padding: 40px;
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  background-color: ${(props) => (props.theme === "light" ? "white" : "black")};
`;

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
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
