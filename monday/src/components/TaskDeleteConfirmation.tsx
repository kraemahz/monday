import React from 'react';

interface TaskDeleteConfirmationProps {
  id: string;
  onConfirm: (id: string) => void;
  onCancel: () => void;
}

const TaskDeleteConfirmation: React.FC<TaskDeleteConfirmationProps> = ({ id, onConfirm, onCancel }) => {
 return (
   <div className="task-delete-confirmation">
     <p>Are you sure you want to delete this task?</p>
     <button onClick={() => onConfirm(id)}>Delete</button>
     <button onClick={onCancel}>Cancel</button>
   </div>
 );
};

export default TaskDeleteConfirmation;
