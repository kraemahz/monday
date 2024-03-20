import React from 'react';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskListViewProps {
  tasks: Task[];
}

const TaskListView: React.FC<TaskListViewProps> = ({ tasks }) => {
 return (
   <div className="task-list-view">
     {tasks.map((task) => (
       <div key={task.id} className="task-item">
         <h3>{task.title}</h3>
         <p>{task.description}</p>
         <button>Edit</button>
         <button>Delete</button>
       </div>
     ))}
   </div>
 );
};

export default TaskListView;
