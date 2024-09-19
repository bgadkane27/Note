import { useState } from "react";
import "./todo.css";
import { useEffect } from "react";
import { MdCancel } from "react-icons/md";

const todoKey="todoData";

export default function Todo() {
  const [dateTime, setDateTime] = useState("");
  const [input, setInput] = useState("");
  const [task, setTask] = useState(()=>{
    const rawData=localStorage.getItem(todoKey);
    if(!rawData) return []
    return JSON.parse(rawData);
  });


  // Real time clock

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDateTime = new Date().toLocaleString();
      setDateTime(currentDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent FormDefault

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    if (task.includes(input)) return;

    setTask((prevTask) => [...prevTask, input]);

    setInput("");
  };

  localStorage.setItem(todoKey, JSON.stringify(task));


  const handleTaskDelete = (value) => {
    const currentTask = task.filter((curTask) => curTask !== value);
    setTask(currentTask);
  };

  const handleAll=()=>{
    setTask([]);
  }

  return (
    <div className="todo-main">
      <h1>To-dos</h1>
      <h2>{dateTime}</h2>
      <section className="todo-form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-todo">
            <input
              type="text"
              maxLength={10}
              pattern="[A-Za-z]+"
              title="only alphabets are allowed and maximum characters 10 only"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a items"
            />
            <input type="submit" value="Add Task" />
          </div>
        </form>
      </section>

      <section>
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="list-item">
                <span>{curTask}</span>
                <button
                  className="close-btn"
                  onClick={() => handleTaskDelete(curTask)}
                >
                  <MdCancel />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        {/* <button className="clear-btn" onClick={handleAll}>Clear All</button> */}
        {task.length > 0 ? (
          <button className="clear-btn" onClick={handleAll}>
            Clear All
          </button>
        ) : (
          <>
           <img src="/todo1.png" alt="No tasks" className="no-todo-img" />
          <p className="blank-msg">No to-dos</p>
          </>
        )}
      </section>
    </div>
  );
}
