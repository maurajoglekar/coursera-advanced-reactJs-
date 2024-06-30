import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ isActive }) => (isActive ? "purple" : "#f5f5f5")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
`;

export const tabsData = [
  {
    value: "html",
    label: "HTML",
    panel:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    label: "CSS",
    panel:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "javascript",
    label: "Javascript",
    panel:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

const Tabs = ({ defaultValue, items }) => {
  const [value, setValue] = useState(defaultValue ?? items[0].value);

  const chosenContent = items.find((item) => item.value === value);

  return (
    <div>
      <div>
        {items.map((item) => (
          <StyledButton
            key={item.value}
            isActive={item.value === value}
            onClick={() => setValue(item.value)}
          >
            {item.label}
          </StyledButton>
        ))}
      </div>
      <div>{chosenContent.panel ?? `No content for this tab`}</div>
    </div>
  );
};

export default Tabs;
