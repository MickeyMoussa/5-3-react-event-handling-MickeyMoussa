import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  const hasTasks = tasks && tasks.length > 0;

  return (
    <ul className="list">
      {/* Task 2 – Display Placeholder if No Tasks Yet */}
      {!hasTasks && (
        <li className="placeholder">No tasks yet.</li>
      )}

      {/* Task 2 & 3 – Map tasks to TaskItem */}
      {hasTasks &&
        tasks.map((t) => (
          <TaskItem key={t.id} id={t.id} text={t.text} onDelete={onDelete} />
        ))}
    </ul>
  );
}
