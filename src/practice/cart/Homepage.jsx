import { useEffect, useState } from "react";
import "./Homepage.css";
const Homepage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img
            src={item.image}
            alt={item.description}
            width="150"
            height="150"
          />
          <p>{item.title}</p>
          <h3>${item.price}</h3>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
