/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Handler from "./handler.js";
import * as CONSTENT from "./constents.js";
import "./calender.styles.css";
import Events from "../events/events.component.jsx";
import RightArrowIcon from "../../icons/icons-components/right-icon-arrow";
import LeftArrowIcon from "../../icons/icons-components/left-icon-arrow/index.jsx";
function Calender() {
	const [events, setEvents] = useState([]);
	const [currentDayInTheWeek, setCurrentDayInTheWeek] = useState(new Date().getDay());
	const [yearSlider, setYearSlider] = useState(new Date().getFullYear());
	const [monthSlider, setMonthSlider] = useState(new Date().getMonth() + 1);
	const [calenderTemplate, setCalenderTemplate] = useState(CONSTENT.CALENDER_TEMPLATE);
	const [currentDate, setCurrentDate] = useState(
		`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
	);
	const userId = useSelector((state) => state.userReducer.userId);

	useEffect(() => {
		let isMounted = true;
		const newClaenderTemplate = Handler.calenderTemplateFun(calenderTemplate, monthSlider, yearSlider);
		setCalenderTemplate(newClaenderTemplate);
		(async (userId) => {
			const allEvents = await Handler.fetchAllEvents(userId);
			if (isMounted) setEvents(allEvents);
		})(userId);
		return () => {
			isMounted = false;
		};
	}, []);
	console.log("renderer");

	const sliderMove = Handler.monthsSlider(monthSlider, setMonthSlider, calenderTemplate, yearSlider, setYearSlider);

	return (
		<div className="calender">
			<div className="calender-date">
				<p
					onClick={() => {
						const newClaenderTemplate = sliderMove(-1);
						setCalenderTemplate(newClaenderTemplate);
					}}
					className="calender-right-arrow-icon"
				>
					<RightArrowIcon />
				</p>
				<p className="home-page-date-content">
					{CONSTENT.CALENDER_MONTHS[monthSlider - 1]} {yearSlider}
				</p>
				<p
					onClick={() => {
						const newClaenderTemplate = sliderMove(1);
						setCalenderTemplate(newClaenderTemplate);
					}}
					className="calender-left-arrow-icon"
				>
					<LeftArrowIcon />
				</p>
			</div>
			<div className="week-days-warpper">
				<div className="week-days">
					{CONSTENT.DAYS.map((day, index) => {
						return (
							<p key={index} className="day">
								{day}
							</p>
						);
					})}
				</div>
			</div>
			<div className="dates-list">
				<div className="calender-component">
					<div className="calender-container">
						{calenderTemplate.map((week, wIndex) => {
							return (
								<div key={wIndex} className="week-days">
									{week.map((day, dIndex) => {
										return (
											<div
												onClick={(e) => {
													const newCurrentDate = `${day}/${monthSlider}/${yearSlider}`;
													setCurrentDate(newCurrentDate);
													setCurrentDayInTheWeek(dIndex);
												}}
												key={wIndex + dIndex}
												style={{
													visibility: day ? "inherit" : "hidden",
												}}
												className="calender-cube"
											>
												<div
													style={{
														opacity: `${day}/${monthSlider}/${yearSlider}` === currentDate ? 1 : 0.4,
													}}
													className="calender-cube-background"
												></div>
												{events[`${day}/${monthSlider}/${yearSlider}`]?.events?.length ? (
													<span className="saved-events"></span>
												) : null}
												{day}
											</div>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<Events
				currentDayInTheWeek={currentDayInTheWeek}
				currentDate={currentDate}
				event={events[currentDate]?.events || []}
				setAllEvents={setEvents}
				allEvents={events}
			/>
		</div>
	);
}

export default React.memo(Calender);
