import React, { useState } from "react";
import AddEvents from "../add-events/add-events.component";
import "./home.styles.css";
import ArrowDownIcon from "../../icons/icons-components/arrow-down-icon/arrow-down-icon.component";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import ArrowLeftIcon from "../../icons/icons-components/arrow-left-icon/arrow-left-icon.component";
import ListItem2 from "../list-item-2/list-item2.component";
import image2 from "../../images/qr-code.png";

function Home() {
  const [state, setState] = useState({
    openAddTaskWindow: false,
    openAddEventWindow: false,
    pointerEvents: "",
  });

  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);

  function openWindow(windowKey) {
    let currentState = { ...state };
    currentState.pointerEvents = "none";
    currentState[windowKey] = true;
    setState(currentState);
  }

  function openItem(itemContainer, index, setContainer) {
    let currentTaksState = [...itemContainer];
    currentTaksState[index].isOpen = !currentTaksState[index].isOpen;
    setContainer(currentTaksState);
  }

  function deleteItem(id, container, setContainer) {
    debugger;
    setContainer(container.filter((item) => item.id != id));
  }

  return (
    <section id="home-page">
      <div
        style={{ pointerEvents: state.pointerEvents }}
        className="home-page-warpper"
      >
        <div className="home-page-right-side">
          <header className="home-page-left-side-main-header">
            <p className="home-page-left-side-header-content">
              ערב טוב,
              <span className="home-page-left-side-header-content-username-name">
                ישראל
              </span>
              !
            </p>
            <input
              className="home-page-left-side-main-input"
              type="text"
              placeholder={`חיפוש מהיר, (לדוג' שם קבוצה או שם הודעה..)`}
            />
          </header>

          <div className="my-tasks-container">
            <div className="my-tasks-main-header">
              <p className="my-tasks-header-content">המשימות שלי</p>
            </div>
            <div className="my-tasks-list">
              {tasks.map((task, index) => {
                return (
                  <ListItem2
                    id={task.id}
                    onClickEvent={deleteItem}
                    onClickEventParams={[tasks, setTasks]}
                    key={index}
                    itemColor={task.taskColor}
                    itemName={task.taskName}
                    itemDescription={task.taskDescription}
                    itemIsOpen={task.isOpen}
                    index={index}
                    openItem={openItem}
                    itemContainer={tasks}
                    setContainer={setTasks}
                  />
                );
              })}
            </div>
            <div className="my-task-button-warpper">
              <button
                disabled={state.openAddTaskWindow}
                onClick={() => openWindow("openAddTaskWindow")}
                className="add-new-task-button"
              >
                משימה חדשה
              </button>
            </div>
          </div>
        </div>

        <div className="home-page-left-side">
          <div className="home-page-right-warpper">
            <div className="calander">
              <div className="calander-date">
                <p className="home-page-left-arrow">left</p>
                <p className="home-page-date-content">פברואר 2021</p>
                <p classNames="home-page-left-arrow">right</p>
              </div>
              <div className="week-days-warpper">
                <div className="week-days">
                  <p className="day">א'</p>
                  <p className="day">ב'</p>
                  <p className="day">ג'</p>
                  <p className="day">ד'</p>
                  <p className="day">ה'</p>
                  <p className="day">ו'</p>
                  <p className="day">ש'</p>
                </div>
              </div>
              <div className="dates-list"></div>
            </div>
            <div className="home-page-events">
              <div className="calander-date">
                <p className="home-page-left-arrow">left</p>
                <p className="home-page-date-content">פברואר 2021</p>
                <p classNames="home-page-left-arrow">right</p>
              </div>
              <div className="my-tasks-list-warpper">
                <div className="my-events-list">
                  {events.map((event, index) => {
                    console.log(event);
                    return (
                      <ListItem2
                        id={event.id}
                        onClickEvent={deleteItem}
                        onClickEventParams={[events, setEvents]}
                        key={index}
                        itemColor={event.taskColor}
                        itemName={event.taskName}
                        itemDescription={event.taskDescription}
                        itemIsOpen={event.isOpen}
                        index={index}
                        openItem={openItem}
                        itemContainer={events}
                        setContainer={setEvents}
                      />
                    );
                  })}
                </div>
                <div className="my-task-button-warpper-2 my-task-button-warpper">
                  <button
                    disabled={state.openAddEventWindow}
                    onClick={() => openWindow("openAddEventWindow")}
                    className="add-new-task-button"
                  >
                    אירוע חדש
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {state.openAddTaskWindow && (
        <AddEvents
          useState={[state, setState]}
          useTasks={[tasks, setTasks]}
          tasksDetails={["משימה חדשה", "שם משימה"]}
          windowKey="openAddTaskWindow"
        />
      )}
      {state.openAddEventWindow && (
        <AddEvents
          useState={[state, setState]}
          useTasks={[events, setEvents]}
          tasksDetails={["אירוע חדש", "שם אירוע"]}
          windowKey="openAddEventWindow"
        />
      )}
    </section>
  );
}

export default Home;
