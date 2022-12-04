import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);
  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold">Counter Component</h1>
      <div className="flex justify-center items-center">
        <button
          className="text-4xl text-red-400 p-3"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <h1 className="text-2xl text-center font-bold">{count}</h1>
        <button
          className="text-4xl text-red-400 p-3"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
