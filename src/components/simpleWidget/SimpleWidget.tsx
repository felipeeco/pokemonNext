"use client";
import { useAppSelector } from "@/store";
import { useAppDispatch } from "@/store";
import {
  increment,
  decrement,
  resetCounter,
} from "@/store/counter/counterSlice";
import { IoCafeOutline } from "react-icons/io5";

export const SimpleWidget = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 m-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">Contador</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              <IoCafeOutline size={50} />
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{counter}</h4>
              <div className="flex">
                <button
                  className="flex items-center justify-center p-2 rounded-x1 bg-gray-900 text-white hover:bg-gray-600"
                  onClick={() => dispatch(decrement())}
                >
                  -1
                </button>
                <button
                  className="flex items-center justify-center p-2 rounded-x1 bg-gray-900 text-white hover:bg-gray-600"
                  onClick={() => dispatch(increment())}
                >
                  +1
                </button>
                <button
                  className="flex items-center justify-center p-2 rounded-x1 bg-gray-900 text-white hover:bg-gray-600"
                  onClick={() => dispatch(resetCounter())}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
