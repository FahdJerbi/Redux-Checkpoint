import React from "react";

const Task = ({ id, description, isDone, editTogle }) => {
  return (
    <div id={id} className="task">
      <span>
        <input type="checkbox" checkbox={isDone} />
        {description}
        <button onClick={() => editTogle(id, description)}>edit</button>
      </span>
    </div>
  );
};

export default Task;
