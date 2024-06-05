import DessertsList from "./DessertList";

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

function DessertListWrapper() {
  return (
    <div>
      <h3>List of low calorie desserts:</h3>
      <DessertsList desserts={desserts} />
    </div>
  );
}

export default DessertListWrapper;
