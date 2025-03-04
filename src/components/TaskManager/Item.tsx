import React from "react";

import { useTaskManagerStore } from "@/store";
import { Task } from "@/types";

export type Props = {
  task: Task;
};

const Item = ({ task }: Props) => {
  const { deleteTask, toggleTaskCompleted } = useTaskManagerStore(
    (state) => state
  );

  const handleTitleClick = () => {
    toggleTaskCompleted(task.id);
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  return (
    <li className="flex items-center justify-between border-b py-2">
      <span
        className={`cursor-pointer ${
          task.completed ? "line-through text-green-500" : "text-black"
        }`}
        onClick={handleTitleClick}
      >
        {task.title}
      </span>

      <button
        className="bg-red-500 text-white px-4 rounded"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
