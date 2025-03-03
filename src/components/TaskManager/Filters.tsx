import React from "react";

import { useTaskManagerStore } from "@/store";

const Filters = () => {
  const { activeFilter, setFilter } = useTaskManagerStore((state) => state);

  const handleFilterClick = (value) => () => {
    setFilter(value);
  };

  return (
    <div className="flex gap-4 justify-around mb-4 text-gray-700">
      <button
        className={`grow rounded ${
          activeFilter === "all" ? "bg-gray-200" : ""
        }`}
        onClick={handleFilterClick("all")}
      >
        All
      </button>
      <button
        className={`grow rounded ${
          activeFilter === "completed" ? "bg-gray-200" : ""
        }`}
        onClick={handleFilterClick("completed")}
      >
        Completed
      </button>
      <button
        className={`grow rounded ${
          activeFilter === "pending" ? "bg-gray-200" : ""
        }`}
        onClick={handleFilterClick("pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default Filters;
