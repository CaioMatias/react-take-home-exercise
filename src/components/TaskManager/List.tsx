import React from "react";

import Item from "@/components/TaskManager/Item";

import { useTaskManagerStore } from "@/store";

const List = () => {
  const { tasks, activeFilter } = useTaskManagerStore((state) => state);

  return (
    <ul>
      {tasks
        .filter((task) => {
          if (activeFilter === "all") return true;
          if (activeFilter === "completed") return task.completed;
          if (activeFilter === "pending") return !task.completed;
          return false;
        })
        .map((task) => (
          <Item key={task.id} task={task} />
        ))}
    </ul>
  );
};

export default List;
