import React, { useEffect, useState } from "react";
import AddEvents from "../add-events/add-events.component";
import "./home.styles.css";
import ListItem2 from "../list-item-2/list-item2.component";
import { useSelector } from "react-redux";
import Calender from "../calender/calender.component";

function Home() {
  const [state, setState] = useState({
    openAddTaskWindow: false,
    openAddEventWindow: false,
    pointerEvents: "",
  });

  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);
  const userId = useSelector((state) => state.userReducer.userId);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const taskResponse = await fetch(
      `${process.env.React_App_HEROKU_SERVER_URL}/task/${userId}`
    );
    const taskData = await taskResponse.json();
    setTasks(taskData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  async function deleteItem(id, windowKey, container, setContainer) {
    if (windowKey === "openAddTaskWindow") {
      await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/task`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          taksId: id,
        }),
      });
      setContainer(container.filter((item) => item._id != id));
    } else {
      await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/event`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          eventId: id,
        }),
      });
      setContainer(container.filter((item) => item._id != id));
    }
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
                    key={index}
                    id={task._id}
                    onClickEvent={deleteItem}
                    onClickEventParams={[tasks, setTasks]}
                    itemColor={task.taskColor}
                    itemName={task.taskName}
                    itemDescription={task.taskContent}
                    itemIsOpen={task.isOpen}
                    index={index}
                    openItem={openItem}
                    itemContainer={tasks}
                    setContainer={setTasks}
                    windowKey="openAddTaskWindow"
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
            <Calender events={events} setEvents={setEvents} />
            <div className="home-page-events">
              <div className="calander-date">
                <p className="home-page-left-arrow">left</p>
                <p className="home-page-date-content">פברואר 2021</p>
                <p className="home-page-left-arrow">right</p>
              </div>
              <div className="my-tasks-list-warpper">
                <div className="my-events-list">
                  {/* {events.map((e, index) => {
                    let { event } = e;
                    return (
                      <ListItem2
                        id={event._id}
                        onClickEvent={deleteItem}
                        onClickEventParams={[events, setEvents]}
                        key={index}
                        itemColor={event.taskColor}
                        itemName={event.taskName}
                        itemDescription={event.taskContent}
                        itemIsOpen={event.isOpen}
                        index={index}
                        openItem={openItem}
                        itemContainer={events}
                        setContainer={setEvents}
                        windowKey="openAddEventWindow"
                      />
                    );
                  })} */}
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
