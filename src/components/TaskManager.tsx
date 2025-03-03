import React, { useState } from "react";

import { Task } from "../types";

import TaskItem from "./TaskItem";

const TaskManager = () => {
  const [tasks, setTasks] = useState<any[]>([]);
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
      name: e.target[0].value,
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
      <form onSubmit={handleAddTask} className="mb-4 flex">
        <input
          type="text"
          placeholder="New task..."
          className="flex-grow border rounded-l py-2 px-3"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
          Add
        </button>
      </form>

      {/* filters */}
      <div className="flex justify-around mb-4">
        <button onClick={() => setFilter("all")} className="text-gray-700">
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="text-gray-700"
        >
          Completed
        </button>
        <button onClick={() => setFilter("pending")} className="text-gray-700">
          Pending
        </button>
      </div>

      {/* list */}
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onToggle={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
