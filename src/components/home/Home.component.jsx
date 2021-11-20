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
			const response = await fetch(
				`${process.env.React_App_HEROKU_SERVER_URL}/task`,
				{
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						userId: userId,
						taksId: id,
					}),
				}
			);
			const user = await response.json();
			console.log(user);
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
						<Calender />
						<div className="home-page-events"></div>
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
