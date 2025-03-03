import React from "react";

import { Task } from "@/types";

import Item from "@/components/TaskManager/Item";

type Props = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const List = ({ tasks, onDelete, onToggle }: Props) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default List;
