import { useState, useEffect } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const useTaskState = (initialTasks: Task[]) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // useEffect to mimic fetching tasks from an API
  useEffect(() => {
    // TODO: Replace with actual API call
    setTasks(initialTasks);
  }, [initialTasks]);

  return {
    tasks,
    setTasks,
  };
};
