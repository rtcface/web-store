"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = () => {
  const [count, setCounter] = useState(1);
  return (
    <>
      <div className="flex">
        <button>
          <IoRemoveCircleOutline
            size={30}
            onClick={() => setCounter(count > 1 ? count - 1 : 1)}
          />
        </button>
        <span className="w-20 mx-3 px-5 bg-slate-100 text-center rounded">
          {count}
        </span>
        <button>
          <IoAddCircleOutline size={30} onClick={() => setCounter(count + 1)} />
        </button>
      </div>
    </>
  );
};
