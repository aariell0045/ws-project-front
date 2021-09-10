import "./add-events.styles.css";
import React, { useState } from "react";

function AddEvents(props) {
	const { tasksDetails } = props;
	const [state, setState] = useState({
		taskName: "",
		taskDescription: "",
		taskColor: "",
		colorBar: true,
	});

	console.log(state);
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
		debugger
		const [state, setState] = props.useState;
		let currentState = { ...state };
		currentState[windowKey] = false;
		currentState.pointerEvents = "";
		setState(currentState);
	}

	function addTask(taskDetails) {
		console.log(taskDetails);
		const [tasks, setTasks] = [...props.useTasks];
		let currentTasksState = [...tasks];
		currentTasksState.push({ ...taskDetails });
		setTasks(currentTasksState);
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
		<div className='add-events-container'>
			<div className='add-events-header'>
				<span onClick={() => close(props.windowKey)}>X</span>
				<p>{tasksDetails[0]}</p>
			</div>

			<div className='add-events-main'>
				<div className='add-events-title'>
					<p>{tasksDetails[1]}</p>
					<input
						onChange={(event) => handleInputs(event)}
						name='taskName'
						className='add-events-content'
						type='text'
					/>
				</div>
				<div className='add-events-description'>
					<p>תיאור:</p>
					<textarea
						onChange={(event) => handleInputs(event)}
						name='taskDescription'
						className='add-events-content'
						id=''
						rows='3'
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
									className='add-events-color'
								></span>
							);
						})
					) : (
						<span
							onClick={() => {
								let currentState = { ...state };
								currentState.colorBar = true;
								setState(currentState);
								console.log(state);
							}}
							style={{
								backgroundColor: colorBar[0].color,
							}}
							className='add-events-color'
						></span>
					)}
				</div>
			</div>
			<div className='add-events-footer'>
				<button
					onClick={() => {
						addTask({
							taskName: state.taskName,
							taskDescription: state.taskDescription,
							taskColor: state.taskColor,
							isOpen: false,
						});
						close(props.windowKey);
					}}
					className='add-events-footer-button'
				>
					שמירת שינויים
				</button>
			</div>
		</div>
	);
}

export default AddEvents;
