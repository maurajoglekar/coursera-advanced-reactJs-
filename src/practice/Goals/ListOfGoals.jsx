const ListOfGoals = (props) => {
  return (
    <ul>
      {props.goals.map((g) => (
        <li key={g.goal}>
          My goal is {g.goal} by {g.by}
        </li>
      ))}
    </ul>
  );
};

export default ListOfGoals;
