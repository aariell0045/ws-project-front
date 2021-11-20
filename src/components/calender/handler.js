export async function fetchAllEvents(userId) {
	const response = await fetch(
		`${process.env.React_App_HEROKU_SERVER_URL}/event/${userId}`
	);
	const allEvents = await response.json();
	return allEvents;
}

export function getFirstDayOfMonth(currentMonth, currentYear) {
	const CURRENT_DATE = new Date(`${currentMonth}/1/${currentYear}`);
	const firstDayOfMonth = CURRENT_DATE.getDay();

	return firstDayOfMonth;
}

export function getDaysOfMonth(currentMonth, currentYear) {
	const isLeapYear =
		(currentYear % 4 === 0 && currentYear % 100 !== 0) ||
		currentYear % 400 === 0;

	let days = 0;
	switch (currentMonth) {
		case 1:
			days = 31;
			break;
		case 2:
			days = isLeapYear ? 29 : 28;
			break;
		case 3:
			days = 31;
			break;
		case 4:
			days = 30;
			break;
		case 5:
			days = 31;
			break;
		case 6:
			days = 30;
			break;
		case 7:
			days = 31;
			break;
		case 8:
			days = 31;
			break;
		case 9:
			days = 30;
			break;
		case 10:
			days = 31;
			break;
		case 11:
			days = 30;
			break;
		case 12:
			days = 31;
			break;
		default:
			days = NaN;
			break;
	}
	return days;
}

export function createMonth(days, yy, mm) {
	const month = new Array(days + 1).fill("");

	const currentMonth = month.map((event, index) => {
		event = {
			eventDate: new Date(`${mm}/${index}/${yy}`).getDate(),
			events: [{ _id: "", eventName: "", eventContent: "", eventColor: "" }],
		};
		return event;
	});
	console.log(currentMonth);
	return currentMonth;
}

export function calenderTemplateFun(
	calenderTemplate,
	monthSlider,
	currentYear,
	savedDates
) {
	const startDay = getFirstDayOfMonth(monthSlider, currentYear);
	const daysInTheMonth = getDaysOfMonth(monthSlider, currentYear);
	let day = 1;
	let pointer = false;
	const newCalenderTemplate = calenderTemplate.map((week, wIndex) => {
		return week.map((_day, dIndex) => {
			if (wIndex === 0 && dIndex === startDay) {
				pointer = true;
			}

			if (pointer) {
				if (day === daysInTheMonth) {
					pointer = false;
				}
				return day++ + "";
			}
		});
	});
	return newCalenderTemplate;
}

export function monthsSlider(
	monthSlider,
	setMonthSlider,
	calenderTemplate,
	currentYear,
	setYearSlider
) {
	return function move(action) {
		if (monthSlider === 1 && action === -1) {
			setMonthSlider(12);
			setYearSlider(currentYear + action);
			return calenderTemplateFun(calenderTemplate, 12, currentYear + action);
		}

		if (monthSlider === 12 && action === 1) {
			setMonthSlider(1);
			setYearSlider(currentYear + action);
			return calenderTemplateFun(calenderTemplate, 1, currentYear + action);
		}
		setMonthSlider(monthSlider + action);
		return calenderTemplateFun(
			calenderTemplate,
			monthSlider + action,
			currentYear
		);
	};
}
