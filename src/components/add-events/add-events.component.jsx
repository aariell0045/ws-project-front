import "./add-events.styles.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function AddEvents(props) {
  const { tasksDetails, isEvents, isTasks } = props;
  const [state, setState] = useState({
    taskName: "",
    taskContent: "",
    taskColor: "",
    colorBar: true,
  });

  const userId = useSelector((state) => state.userReducer.userId);
  const COLORS = {
    RED: {
      color: "#FD4C4C",
      name: "RED",
    },
    GREEN: {
      color: "#36F27B",
      name: "GREEN",
    },
    MUSTARD: {
      color: "#C0AD00",
      name: "MUSTARD",
    },
    PURPLE: {
      color: "#834CFD",
      name: "PURPLE",
    },
    ORANGE: {
      color: "#FD8C4C",
      name: "ORANGE",
    },
  };

  const [colorBar, setColorBar] = useState([
    COLORS.RED,
    COLORS.GREEN,
    COLORS.MUSTARD,
    COLORS.PURPLE,
    COLORS.ORANGE,
  ]);

  function close(windowKey) {
    const [state, setState] = props.useState;
    let currentState = { ...state };
    currentState[windowKey] = false;
    currentState.pointerEvents = "";
    setState(currentState);
  }

  async function addTask(taskDetails) {
    const [tasks, setTasks] = [...props.useTasks];
    console.log(isTasks);
    console.log(isEvents);
    if (props.windowKey === "openAddTaskWindow") {
      const response = await fetch("http://localhost:8080/task", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskName: taskDetails.taskName,
          taskColor: taskDetails.taskColor,
          taskContent: taskDetails.taskContent,
          userId: userId,
        }),
      });
      const data = await response.json();
      console.log("data:", data);
      const newTask = {
        ...data,
        isOpen: false,
      };
      let currentTasksState = [...tasks];
      currentTasksState.push({ ...newTask });
      setTasks(currentTasksState);
    }
    console.log(taskDetails);
    if (props.windowKey === "openAddEventWindow") {
      const response = await fetch("http://localhost:8080/event", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName: taskDetails.taskName,
          eventColor: taskDetails.taskColor,
          eventContent: taskDetails.taskContent,
          userId: userId,
        }),
      });
      const data = await response.json();
      console.log("data:", data);
      const newTask = {
        ...{
          taskName: data.eventName,
          taskColor: data.eventColor,
          taskContent: data.eventContent,
        },
        isOpen: false,
      };
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
        <span onClick={() => close(props.windowKey)}>X</span>
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
