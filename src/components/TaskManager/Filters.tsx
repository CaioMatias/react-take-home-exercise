import React from "react";

type Props = {
  setFilter: (filter: string) => void;
};

const Filters = ({ setFilter }: Props) => {
  return (
    <div className="flex justify-around mb-4">
      <button className="text-gray-700" onClick={() => setFilter("all")}>
        All
      </button>
      <button onClick={() => setFilter("completed")} className="text-gray-700">
        Completed
      </button>
      <button className="text-gray-700" onClick={() => setFilter("pending")}>
        Pending
      </button>
    </div>
  );
};

export default Filters;
