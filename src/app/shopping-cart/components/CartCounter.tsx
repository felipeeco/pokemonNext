'use client';
import { useAppSelector } from "@/store";
import { useAppDispatch } from "@/store";
import { increment, decrement, resetCounter, initCounterState } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}


export const CartCounter = ({value = 0} : Props) => {

  const counter = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart products</span>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button className="flex items-center justify-center p-2 rounded-x1 bg-gray-900 text-white hover:bg-gray-600"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button className="flex items-center justify-center p-2 rounded-x1 bg-gray-900 text-white hover:bg-gray-600"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button className="flex items-center justify-center p-2 rounded-x1 bg-gray-900 text-white hover:bg-gray-600"
          onClick={() => dispatch(resetCounter())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}