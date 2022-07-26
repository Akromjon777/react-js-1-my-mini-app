import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function incr() {
    setCount((prev) => prev + 1);
  }

  function decr() {
    setCount((prev) => prev - 1);
  }
  return (
    <>
      <h4 className="count fs-2 ms-2">Counter: {count}</h4>
      <button onClick={incr} className="incr btn btn-success">
        Incrment
      </button>
      <button onClick={decr} className="decr btn btn-danger mx-3">
        Decrement
      </button>
      <hr />
    </>
  );
};

export { Counter };
