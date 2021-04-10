import Taskss from "./task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="Task" onDoubleClick={() => onToggle(tasks.id)}>
      {tasks.map((Task) => (
        <Taskss
          key={Task.id}
          task={Task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
