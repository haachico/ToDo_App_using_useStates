import "./styles.css";
import { useState } from "react";

export default function App() {
  const [taskText, setTaskText] = useState({ text: "", isDone: false });
  const [notes, setNotes] = useState([]);

  const handleAddBtn = () => {
    setNotes(taskText.text !== "" ? [...notes, taskText] : notes);
  };

  const handleDeleteBtn = (name) => {
    setNotes(notes.filter((e) => e !== name));
  };

  const handleDoneBtn = (item) => {
    setNotes(
      notes.map((e) => (e.text === item.text ? { ...e, isDone: !e.isDone } : e))
    );
  };
  return (
    <div className="App">
      <h1>Your ToDo App! 🤠 </h1>
      <h4>Enter your task here. 📝</h4>
      <input
        type="text"
        onChange={(event) => setTaskText({ text: event.target.value })}
        placeholder="Type here..."
        className="input--box"
      />
      <button
        onClick={handleAddBtn}
        style={{ display: "block", marginTop: "1rem" }}
      >
        Add
      </button>

      <div>
        {" "}
        <h3>
          Tasks will appear here <span>👇</span>
        </h3>
        {notes.length > 0 ? (
          <ul>
            {notes.map((e) => (
              <li className="taskItem">
                <h3
                  style={{
                    textDecoration: e.isDone ? "line-through" : "",
                    color: e.isDone ? "green" : ""
                  }}
                >
                  Title: {e.text}
                </h3>
                <button onClick={() => handleDoneBtn(e)}>
                  {e.isDone ? "Undo" : "Check"}
                </button>

                <button onClick={() => handleDeleteBtn(e)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <h3 style={{ color: "red" }}>Write in the textbox! ✍</h3>
        )}
      </div>
    </div>
  );
}
