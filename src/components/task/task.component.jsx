import React from "react";
import "./task.styles.css";
import * as Handler from "./handler";

function Task({ setTaskToDisplay, taskName, taskContent }) {
	return (
		<div className="task-wrapper">
			<div className="task-container">
				<div className="close-task">
					<span onClick={() => Handler.close(setTaskToDisplay)}>X</span>
				</div>
				<div className="task-background"></div>
				<header className="task-header">
					<h2>{taskName}</h2>
				</header>
				<main className="task-main-content">
					<p>{taskContent}</p>
				</main>
			</div>
		</div>
	);
}

export default Task;
