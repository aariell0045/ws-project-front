import React, { useEffect, useState } from "react";
import "./tasks.styles.css";
import * as Handler from "./handler";
import * as CONSTENT from "./constents";
import { useSelector } from "react-redux";
import ArrowLeftIcon from "../../icons/icons-components/arrow-left-icon/arrow-left-icon.component";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import Task from "../task/task.component";

function Tasks() {
	const [tasks, setTasks] = useState([]);
	const [taskToDisplay, setTaskToDisplay] = useState({});
	const [popUpWindow, setPopUpWindow] = useState(false);
	const [inputVal, setInputVal] = useState("");
	const [textAreaVal, setTextAreaVal] = useState("");
	const leftSideElement = document.getElementsByClassName("home-page-right-side");
	const showTask = taskToDisplay.taskName !== undefined || taskToDisplay.taskContent !== undefined;
	if (leftSideElement[0]) {
		leftSideElement[0].style["z-index"] = showTask || popUpWindow ? 1 : "";
	}

	const close = () => setPopUpWindow(false);
	const open = () => setPopUpWindow(true);

	const userId = useSelector((state) => state.userReducer.userId);
	useEffect(() => {
		async function fetchTasks() {
			const allTasks = await Handler.fetchTasks(userId);
			setTasks(allTasks);
		}
		fetchTasks();
	}, [userId]);

	function mapColorsBar(color, index) {
		return (
			<div
				className="color-tools-bar"
				onClick={() => {
					const spanBarColor = document.getElementsByClassName("important-task-level");
					if (spanBarColor) {
						spanBarColor[0].style["background-color"] = color;
					}
				}}
			>
				<div style={{ backgroundColor: color }} className="color-tools-bar-background"></div>
			</div>
		);
	}

	const headerText = "המשימות שלי";
	const buttonText = "משימה חדשה";
	const addNewTaskHeaderText = "משימה חדשה";
	function mapTasks(event, index) {
		return (
			<div
				onClick={() =>
					setTaskToDisplay({ taskName: event.taskName, taskContent: event.taskContent, taskColor: event.taskColor })
				}
				className="task-list-item"
			>
				<p style={{ color: event.taskColor }} className="task-list-header">
					{event.taskName}
				</p>
				<span className="important-task-level-v2-samller-warpper">
					<span className="important-task-level-v2-smaller">
						<span
							style={{ backgroundColor: event.taskColor }}
							className="important-task-level-v2-smaller-background"
						></span>
					</span>
				</span>
				<div className="task-arrow-icon">
					<ArrowLeftIcon />
				</div>
				<div
					onClick={async (e) => {
						e.stopPropagation();
						console.log(event);
						const body = {
							taksId: event._id,
							userId: userId,
						};

						const index = tasks.findIndex((task) => task._id == event._id);
						const newTasks = [...tasks];
						newTasks.splice(index, 1);
						setTasks(newTasks);
						Handler.removeTask(body);
					}}
					className="task-trash-icon"
				>
					<TrashIcon />
				</div>
			</div>
		);
	}

	return (
		<div className="tasks-container">
			<header className="tasks-header">
				<p>{headerText}</p>
			</header>
			{tasks.map(mapTasks)}
			{popUpWindow && (
				<div className="add-new-task-wrapper">
					<div className="add-new-task-container">
						<div className="add-new-task-background"></div>
						<div onClick={close} className="add-new-task-close">
							<span>X</span>
							<span className="context-header">{addNewTaskHeaderText}</span>
							<span className="important-task-level"></span>
						</div>
						<header className="add-new-task-header">
							<input
								value={inputVal}
								onChange={({ target: { value } }) => Handler.inputRenderer(value, setInputVal)}
								className="add-new-task-input"
								type="text"
								placeholder={addNewTaskHeaderText}
							/>
							<div className="add-new-task-colors-bar">{CONSTENT.COLORS.map(mapColorsBar)}</div>
						</header>
						<div className="add-new-task-description">
							<p>תיאור:</p>
							<textarea
								value={textAreaVal}
								onChange={({ target: { value } }) => Handler.textAreaRenderer(value, setTextAreaVal)}
								className="add-new-task-content"
								rows="3"
							></textarea>
						</div>
						<div className="add-new-task-button-container">
							<button
								onClick={async () => {
									const spanBarColor = document.getElementsByClassName("important-task-level");
									const color = spanBarColor[0].style["background-color"];

									const body = {
										taskColor: color,
										taskName: inputVal,
										taskContent: textAreaVal,
										userId,
									};

									const task = await Handler.postNewTask(body);
									setTasks([task, ...tasks]);
									Handler.clearState("", setInputVal);
									Handler.clearState("", setTextAreaVal);
									spanBarColor[0].style["background-color"] = "";
									close();
								}}
								className="add-new-task-button"
							>
								שמור שינויים
							</button>
						</div>
					</div>
				</div>
			)}
			<footer className="tasks-footer">
				<button onClick={open} className="add-new-task-action">
					{buttonText}
				</button>
			</footer>
			{showTask && <Task setTaskToDisplay={setTaskToDisplay} {...taskToDisplay} />}
		</div>
	);
}

export default React.memo(Tasks);
