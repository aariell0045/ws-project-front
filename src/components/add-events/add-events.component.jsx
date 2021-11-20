import "./add-events.styles.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import COLORS from "./constents";
import close from "./handler.js";
function AddEvents(props) {
  const { tasksDetails, isEvents, isTasks } = props;
  const [state, setState] = useState({
    taskName: "",
    taskContent: "",
    taskColor: "",
    colorBar: true,
  });

  const userId = useSelector((state) => state.userReducer.userId);

  const [colorBar, setColorBar] = useState([
    COLORS.RED,
    COLORS.GREEN,
    COLORS.MUSTARD,
    COLORS.PURPLE,
    COLORS.ORANGE,
  ]);

  async function addTask(taskDetails) {
    const [tasks, setTasks] = [...props.useTasks];
    if (props.windowKey === "openAddTaskWindow") {
      const response = await fetch(
        `${process.env.React_App_HEROKU_SERVER_URL}/task`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            taskName: taskDetails.taskName,
            taskColor: taskDetails.taskColor,
            taskContent: taskDetails.taskContent,
            userId: userId,
          }),
        }
      );
      const data = await response.json();
      const newTask = {
        ...data,
        isOpen: false,
      };
      let currentTasksState = [...tasks];
      currentTasksState.push({ ...newTask });
      setTasks(currentTasksState);
    }
    if (props.windowKey === "openAddEventWindow") {
      const event = {
        eventName: taskDetails.taskName,
        eventColor: taskDetails.taskColor,
        eventContent: taskDetails.taskContent,
      };
      const response = await fetch(
        `${process.env.React_App_HEROKU_SERVER_URL}/event`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventDate: "22/11/2021",
            userId: userId,
            ...event,
          }),
        }
      );
      const data = await response.json();
      const newTask = { isOpen: false, ...data };
      let currentTasksState = [...tasks];
      currentTasksState.push({ ...newTask });
      setTasks(currentTasksState);
    }
  }

  function handleInputs({ target }) {
    const { value, name } = target;
    let currentState = { ...state };
    currentState[name] = value;
    setState(currentState);
  }

  function changeColor(color, index) {
    let currentColorBarState = [...colorBar];
    let currentColor = currentColorBarState[0];
    currentColorBarState[0] = currentColorBarState[index];
    currentColorBarState[index] = currentColor;
    setColorBar(currentColorBarState);
  }

  return (
    <div className="add-events-container">
      <div className="add-events-header">
        <span onClick={() => close(props.windowKey, props.useState)}>X</span>
        <p>{tasksDetails[0]}</p>
      </div>

      <div className="add-events-main">
        <div className="add-events-title">
          <p>{tasksDetails[1]}</p>
          <input
            onChange={(event) => handleInputs(event)}
            name="taskName"
            className="add-events-content"
            type="text"
          />
        </div>
        <div className="add-events-description">
          <p>תיאור:</p>
          <textarea
            onChange={(event) => handleInputs(event)}
            name="taskContent"
            className="add-events-content"
            id=""
            rows="3"
          ></textarea>
        </div>
        <div
          className={`${
            state.colorBar
              ? "add-events-color-bar-open"
              : "add-events-color-bar-close"
          }`}
        >
          {state.colorBar ? (
            colorBar.map((color, index) => {
              return (
                <span
                  onClick={() => {
                    changeColor(color, index);
                    let currentState = { ...state };
                    currentState.colorBar = false;
                    currentState.taskColor = color.name;
                    setState(currentState);
                  }}
                  style={{ backgroundColor: color.color }}
                  className="add-events-color"
                ></span>
              );
            })
          ) : (
            <span
              onClick={() => {
                let currentState = { ...state };
                currentState.colorBar = true;
                setState(currentState);
              }}
              style={{
                backgroundColor: colorBar[0].color,
              }}
              className="add-events-color"
            ></span>
          )}
        </div>
      </div>
      <div className="add-events-footer">
        <button
          onClick={() => {
            addTask({
              taskName: state.taskName,
              taskContent: state.taskContent,
              taskColor: state.taskColor,
              isOpen: false,
            });
            close(props.windowKey);
          }}
          className="add-events-footer-button"
        >
          שמירת שינויים
        </button>
      </div>
    </div>
  );
}

export default AddEvents;
