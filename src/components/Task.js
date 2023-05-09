import React from "react";

function Task({task, onDelete}) {
  const{text, category} = task;

  const handleDelete = () =>{
    onDelete(task.id);
  }

  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete" 
      onClick={handleDelete}>
        X
        </button>
    </div>
  );
}

export default Task;
