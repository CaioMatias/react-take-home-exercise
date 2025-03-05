import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Task } from "@/types";

export type TaskManagerStore = {
  tasks?: Task[];
  addTask?: (newTask: Task) => void;
  deleteTask?: (id: number) => void;
  toggleTaskCompleted?: (id: number) => void;
  activeFilter?: "all" | "completed" | "pending";
  setFilter?: (filter: "all" | "completed" | "pending") => void;
};

export const useTaskManagerStore = create<TaskManagerStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (newTask) =>
        set((state) => ({
          tasks: [...state.tasks, newTask],
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      toggleTaskCompleted: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      activeFilter: "all",
      setFilter: (filter) => set({ activeFilter: filter }),
    }),
    {
      name: "task-manager-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
