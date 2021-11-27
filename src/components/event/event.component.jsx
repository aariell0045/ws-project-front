import React from "react";
import * as Handler from "./handler";
import "./event.styles.css";
function Event({ setEventToDisplay, headerText, contentText }) {
	return (
		<div className="event-wrapper">
			<div className="event-container">
				<div onClick={() => Handler.close(setEventToDisplay)} className="close-event">
					X
				</div>
				<div className="event-background"></div>
				<header className="event-header">
					<h2>{headerText}</h2>
				</header>
				<main className="event-content">
					<p>{contentText}</p>
				</main>
			</div>
		</div>
	);
}

export default Event;
