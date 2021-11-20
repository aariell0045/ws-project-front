import React, { useEffect, useState } from "react";
import "./event.styles.css";
import * as CONSTENT from "./constents";
import * as Handler from "./handler";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import ArrowLeftIcon from "../../icons/icons-components/arrow-left-icon/arrow-left-icon.component";
import { useSelector } from "react-redux";

function Events({
	currentDayInTheWeek,
	currentDate,
	event,
	setAllEvents,
	allEvents,
}) {
	const [events, setEvents] = useState(event);
	const [popUpWindow, setPopUpWindow] = useState(false);
	const [eventContent, setEventContent] = useState("");
	const [eventName, setEventName] = useState("");

	useEffect(() => {
		setEvents(event);
	}, [event]);

	function mapEvents(event, index) {
		return (
			<div key={index} className="event-list-item">
				<p className="event-list-header">{event.eventName}</p>
				<div className="event-arrow-icon">
					<ArrowLeftIcon />
				</div>
				<div
					onClick={async () => {
						const body = { userId, eventId: event._id, key: currentDate };
						await Handler.deleteEvent(body);
						const updateEvents = events.filter((e) =>
							Handler.filterEvents(e, event)
						);
						const updateAllEvents = { ...allEvents };
						updateAllEvents[currentDate] = { events: updateEvents };
						setAllEvents(updateAllEvents);
					}}
					className="event-trash-icon"
				>
					<TrashIcon />
				</div>
			</div>
		);
	}

	const userId = useSelector((state) => state.userReducer.userId);

	const close = () => setPopUpWindow(false);
	const open = () => setPopUpWindow(true);

	return (
		<div className="events-container">
			<div className="calender-date">
				<p className="home-page-date-content">{`${CONSTENT.WEEK[currentDayInTheWeek]} ${currentDate}`}</p>
			</div>
			<main className="events-list">{events.map(mapEvents)}</main>
			<footer className="events-footer">
				<button onClick={open} className="add-new-event-action">
					{"אירוע חדש"}
				</button>
			</footer>
			{popUpWindow && (
				<div className="add-new-event-window">
					<div className="add-new-event-sub-header">
						<span onClick={close}>{"X"}</span>
						<span>{"אירוע חדש"}</span>
					</div>
					<header className="add-new-event-header">
						<input
							onChange={({ target: { value } }) =>
								Handler.handleTextRenderer(value, setEventName)
							}
							value={eventName}
							className="add-new-event-input"
							type="text"
							placeholder="שם האירוע"
						/>
					</header>
					<div className="add-new-events-description">
						<p>תיאור:</p>
						<textarea
							onChange={({ target: { value } }) => {
								Handler.handleTextRenderer(value, setEventContent);
							}}
							className="add-new-events-content"
							rows="3"
							value={eventContent}
						></textarea>
					</div>
					<div className="add-new-event-button-container">
						<button
							onClick={async () => {
								const eventBody = {
									userId: userId,
									eventDate: currentDate,
									eventName: eventName,
									eventContent: eventContent,
								};
								console.log(eventBody);
								const event = await Handler.postNewEvent(eventBody);
								const updateAllEvents = { ...allEvents };
								updateAllEvents[currentDate] = { events: event.events };
								setAllEvents(updateAllEvents);
								close();
							}}
							className="add-new-event-button"
						>
							שמור שינויים
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default React.memo(Events);
