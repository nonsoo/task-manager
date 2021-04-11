import "./CSS/App.css";

import { useState } from "react";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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

  //This func allows us to add new tasks
  const addTask = (task) => {
    //creates a random id for the new task that will be created
    const id = Math.floor(Math.random() * 10000) + 1;

    //appends the id to the new tasks
    const newTask = { id, ...task };

    //appends the new tasks to the lst of previous tasks
    setTasks([...tasks, newTask]);
  };

  //This func deletes a task
  //bascially it sets the new tasks to the filtered lst that is created
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // setting the new tasks to the filtered lst
  };

  //this func toggles the reminder feature, allows for the reminder to be changed from true to false
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
      <Header
        title="Task Tracker App"
        onShow={() => setShowAddTask(!showAddTask)}
        btnName={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleRemind} />
      ) : (
        <p style={{ fontSize: "1.25rem" }}>no tasks to show</p>
      )}
    </div>
  );
}

export default App;
