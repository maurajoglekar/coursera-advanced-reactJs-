import { useState } from "react";

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

  return (
    <div>
      <div>
        {items.map((item) => (
          <button>{item.label}</button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
