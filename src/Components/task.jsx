import React from "react";
import { FaTimes } from "react-icons/fa";

const task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`Task__item ${task.reminder ? "taskReminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <p className="Task__item--text">
        {task.text}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer", float: "right" }}
        />
      </p>
      <p className="Task__item--text">{task.day}</p>
    </div>
  );
};

export default task;
