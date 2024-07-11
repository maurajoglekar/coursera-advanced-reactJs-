export interface Dessert {
  name: string;
  calories: number;
  createdAt: string;
}
const desserts: Dessert[] = [
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

interface Props {
  desserts: Dessert[];
}
const DessertsList = ({ desserts }: Props) => {
  const modifiedList = desserts
    .filter((d) => d.calories >= 300)
    .sort((a, b) => b.calories - a.calories);
  return (
    <ul>
      {modifiedList.map((dessert) => {
        return (
          <li
            key={dessert.name}
          >{`${dessert.name} - ${dessert.calories} cal`}</li>
        );
      })}
    </ul>
  );
};
const DessertListWrapper = () => {
  return (
    <div>
      <h3> Header for desserts</h3>
      <DessertsList desserts={desserts} />
    </div>
  );
};

export default DessertListWrapper;
