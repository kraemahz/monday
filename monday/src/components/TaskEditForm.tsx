import React, { useState } from 'react';

interface TaskEditFormProps {
  id: string;
  initialTitle: string;
  initialDescription: string;
  onSave: (id: string, title: string, description: string) => void;
}

const TaskEditForm: React.FC<TaskEditFormProps> = ({ id, initialTitle, initialDescription, onSave }) => {
 const [title, setTitle] = useState(initialTitle);
 const [description, setDescription] = useState(initialDescription);

 return (
   <div className="task-edit-form">
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
     <button onClick={() => onSave(id, title, description)}>Save Changes</button>
   </div>
 );
};

export default TaskEditForm;
