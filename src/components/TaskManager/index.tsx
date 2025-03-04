import React from "react";

import Filters from "@/components/TaskManager/Filters";
import List from "@/components/TaskManager/List";

import { useTaskManagerStore } from "@/store";
import { Task } from "@/types";

const TaskManager = () => {
  const { addTask } = useTaskManagerStore((state) => state);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: Date.now(),
      title: e.target[0].value,
      completed: false,
    };

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();

    addTask(newTask);
  };

  return (
    <div className="container mx-auto bg-white p-4 rounded shadow">
      <form className="mb-4 flex" onSubmit={handleAddTask}>
        <input
          className="flex-grow border rounded-l py-2 px-3"
          type="text"
          placeholder="New task..."
        />
        <button className="bg-blue-500 text-white px-4 rounded-r" type="submit">
          Add
        </button>
      </form>

      <Filters />

      <List />
    </div>
  );
};

export default TaskManager;
