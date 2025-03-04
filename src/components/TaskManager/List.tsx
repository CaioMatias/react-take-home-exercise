import React from "react";

import { AnimatePresence, motion } from "motion/react";

import Item from "@/components/TaskManager/Item";

import { useTaskManagerStore } from "@/store";

const List = () => {
  const { tasks, activeFilter } = useTaskManagerStore((state) => state);

  return (
    <ul className="overflow-x-hidden">
      <AnimatePresence>
        {tasks
          .filter((task) => {
            if (activeFilter === "all") return true;
            if (activeFilter === "completed") return task.completed;
            if (activeFilter === "pending") return !task.completed;
            return false;
          })
          .map((task) => (
            <motion.div
              key={task.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <Item task={task} />
            </motion.div>
          ))}
      </AnimatePresence>
    </ul>
  );
};

export default List;
