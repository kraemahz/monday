import React, { useState } from 'react';

const TaskCreateForm: React.FC = () => {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

 const handleCreateTask = () => {
   // Placeholder for task creation logic
   console.log('Task created:', title, description);
 };

 return (
   <div className="task-create-form">
     <input
       type="text"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       placeholder="Title"
     />
     <textarea
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       placeholder="Description"
     />
     <button onClick={handleCreateTask}>Create Task</button>
   </div>
 );
};

export default TaskCreateForm;
