import React, { useState } from "react";

import { Task } from "@/types";

import Filters from "@/components/TaskManager/Filters";
import List from "@/components/TaskManager/List";

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed === true;
    if (filter === "pending") return task.completed === false;

    return true;
  });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: Date.now(),
      title: e.target[0].value,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const toggleTaskCompletion = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
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

      <Filters setFilter={setFilter} />

      <List
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onToggle={toggleTaskCompletion}
      />
    </div>
  );
};

export default TaskManager;
