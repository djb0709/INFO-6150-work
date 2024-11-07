import { useState } from "react";
import "./App.css";
import Reorder from "./Reorder.jsx";

function App() {
  const [count, setCount] = useState(0);
  const reorderFive = () => {
    setCount(5);
  };

  return (
    <div className="card">
      <p>Count is {count}</p>

      <div className="btn-container">
        <button
          className="order-btn"
          onClick={() => {
            setCount(!!count ? count - 1 : 0);
          }}
          disabled={!count}
        >
          -
        </button>
        <button
          className="order-btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        {count === 0 && <Reorder onReorder={reorderFive} />}
      </div>
    </div>
  );
}

export default App;
