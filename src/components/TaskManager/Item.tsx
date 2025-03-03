import React from "react";

import { Task } from "@/types";

export type Props = {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const Item = ({ task, onDelete, onToggle }: Props) => {
  return (
    <li className="flex items-center justify-between border-b py-2">
      <span
        className={`cursor-pointer ${
          task.completed ? "line-through text-green-500" : "text-black"
        }`}
        onClick={() => onToggle(task.id)}
      >
        {task.title}
      </span>

      <button
        className="bg-red-500 text-white px-4 rounded"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
