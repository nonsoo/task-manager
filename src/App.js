import "./CSS/App.css";

import { useState } from "react";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctors appointment",
      day: "monday, Feb 23, 2021",
      reminder: false,
    },
    {
      id: 2,
      text: "hair appointment",
      day: "wednesday, march 28, 2021",
      reminder: false,
    },
    {
      id: 3,
      text: "nail appointment",
      day: "wednesday, march 30,2021",
      reminder: true,
    },
    {
      id: 4,
      text: "school appointment",
      day: "friday, April 1st, 2021",
      reminder: true,
    },
    {
      id: 5,
      text: "Complete this application",
      day: "Saturaday, April 10th, 2021",
      reminder: true,
    },
    {
      id: 6,
      text: "search for a new phone",
      day: "Saturaday, April 10th, 2021",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // setting the new tasks to the filtered lst
  };

  const ToggleRemind = (id) => {
    setTasks(
      tasks.map((taskChild) =>
        taskChild.id === id
          ? { ...taskChild, reminder: !taskChild.reminder }
          : taskChild
      )
    );
  };
  return (
    <div className="App">
      <Header title="Task Tracker App" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleRemind} />
      ) : (
        <p style={{ fontSize: "1.25rem" }}>no tasks to show</p>
      )}
    </div>
  );
}

export default App;
