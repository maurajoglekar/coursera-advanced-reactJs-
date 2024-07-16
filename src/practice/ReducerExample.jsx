import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "buy") return { money: state.money - 10 };
  if (action.type === "sell") return { money: state.money + 10 };
  return state;
};

const ReducerExample = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "buy" })}>Buy</button>
        <button onClick={() => dispatch({ type: "sell" })}>Sell</button>
      </div>
    </div>
  );
};

export default ReducerExample;
