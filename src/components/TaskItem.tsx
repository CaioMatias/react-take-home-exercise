import React from "react";
import { TaskItem } from "../types";

const TaskItem = ({ task, onDelete, onToggle }: TaskItem) => {
  return (
    <li className="flex items-center justify-between border-b py-2">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-green-500" : "text-black"
        }`}
      >
        {task.name}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-4 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
