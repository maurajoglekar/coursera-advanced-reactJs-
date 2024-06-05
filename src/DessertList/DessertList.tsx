import { Dessert } from "./DessertListWrapper";

interface Props {
  desserts: Dessert[];
}

const DessertsList = ({ desserts }: Props) => {
  const lowCaloriesDesserts = desserts
    .filter((dessert) => {
      return dessert.calories < 400;
    })
    .sort((a, b) => {
      return a.calories - b.calories;
    });

  return (
    <ul>
      {lowCaloriesDesserts.map((dessert) => (
        <li key={dessert.name}>
          {dessert.name} - {dessert.calories} cal
        </li>
      ))}
    </ul>
  );
};
export default DessertsList;
