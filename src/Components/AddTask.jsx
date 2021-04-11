import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("please add a task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="addForm" onSubmit={onSubmit}>
      <div className="form__item">
        <label className="form__item--label">Task</label>
        <input
          className="form__item--text"
          type="text"
          placeholder="add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form__item">
        <label className="form__item--label">Day & Time</label>
        <input
          className="form__item--text"
          type="text"
          placeholder="Set Day and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form__item">
        <label className="form__item--label">Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="Submit" value="Save Task" className="btn subBtn" />
    </form>
  );
};

export default AddTask;
