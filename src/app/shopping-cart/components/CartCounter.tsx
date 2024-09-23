'use client';
import { useState, useEffect } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart products</span>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button className="flex items-center justify-center p-2 rounded-x1 bg-gray-900 text-white hover:bg-gray-600"
          onClick={() => setCounter(counter => counter - 1)}
        >
          -1
        </button>
        <button className="flex items-center justify-center p-2 rounded-x1 bg-gray-900 text-white hover:bg-gray-600"
          onClick={() => setCounter(counter => counter + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}