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
import RadioGroupContainer from "./customHooks/RadioGroup/RadioGroupContainer";
import CursorPositionWrapper from "./reusingBehavior/renderProps/CursorPositionWrapper";
import TodoWrapper from "./final/TodoWrapper";
import HOCWrapper from "./final/HOCWrapper";
import InputFileForm from "./practice/InputFileForm";
import ControlledForm1 from "./practice/ControlledForm1";
import FeedbackForm1 from "./practice/FeedbackForm1";
import Blog from "./practice/Blog";
import { UserProvider } from "./practice/UserContext";
import GoalsApp from "./practice/Goals/GoalsApp";
//import TabsOrig from "./practice/tabs/TabsOrig";
import { tabsData } from "./practice/tabs/Tabs";
import Tabs from "./practice/tabs/Tabs";
import AutoComplete from "./practice/autocomplete/AutoComplete";
import ReducerExample from "./practice/ReducerExample";
import RefExample from "./practice/RefExample";
import SignupForm from "./SignupForm/SignupForm";
import Homepage from "./practice/cart/Homepage";

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

const StyledContainer2 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
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
      <SignupForm />
      <Homepage />
      {/* <RefExample />
      <ReducerExample />
      <AutoComplete />
      <Tabs items={tabsData} />
      <GoalsApp />
      <Blog />
      <FeedbackForm1 />
      <Title>When it comes to dough</Title>
      <Content />
      <StyledContainer>
        <DessertListWrapper />
        <GiftCardPage />
        <FetchUser />
        <Weekday />
      </StyledContainer>
      <StyledContainer2>
        <Counter />
        <RadioGroupContainer />
        <CursorPositionWrapper />
        <RegistrationForm />
      </StyledContainer2>
      <StyledContainer2>
        <TodoWrapper />
        <HOCWrapper />
      </StyledContainer2> */}
      {/* <StyledContainer2>
        <InputFileForm />
        <ControlledForm1 />
      </StyledContainer2> */}
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
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  );
}

export default Root;
