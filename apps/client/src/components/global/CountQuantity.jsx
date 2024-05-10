import React from "react";
import { useCount } from "@app/client/store/count";
export default function CountQuantity() {
  const { count, increaseCount, decreaseCount } = useCount();
  return (
    <div className="flex gap-4 items-center">
      <button
        className="bg-black  text-white w-8 h-8 rounded-full"
        onClick={() => increaseCount()}
      >
        +
      </button>
      <p className="text-lg text-slate-950 font-bold">{count}</p>
      <button
        className="bg-black text-white w-8 h-8 rounded-full"
        onClick={() => decreaseCount()}
      >
        &minus;
      </button>
    </div>
  );
}
