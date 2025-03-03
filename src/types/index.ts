export type Task = {
  id: number;
  name: string;
  completed: boolean;
};

export type TaskItem = {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};
