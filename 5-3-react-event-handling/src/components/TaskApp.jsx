import React, { useState } from "react";
import TaskList from "./TaskList";

const ALLOWED_TASKS = [
  "Make group",
  "Prepare proposal",
  "Make prototype",
  "Implement front-end",
  "Implement backend",
  "Deploy project"
];

export default function TaskApp() {

  const [text, setText] = useState("");

  
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    const value = text.trim();
    if (!value) return;

    
    const isAllowed = ALLOWED_TASKS.includes(value);
    if (!isAllowed) {
 
      return;
    }


    setTasks(prev => [
      ...prev,
      { id: Date.now(), text: value }
    ]);


    setText("");
  };

  const handleDelete = (id) => {
   
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <section className="card">
      {/* Controlled Input */}
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          list="allowed-tasks"
        />
        <datalist id="allowed-tasks">
          {ALLOWED_TASKS.map((t) => (
            <option key={t} value={t} />
          ))}
        </datalist>
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/* Render Task List and Enable Delete */}
      <TaskList tasks={tasks} onDelete={handleDelete} />

      {/* Clear All */}
      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
