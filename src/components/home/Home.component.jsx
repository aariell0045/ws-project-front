import React, { useState } from "react";
import AddEvents from "../add-events/add-events.component";
import "./home.styles.css";
import ArrowDownIcon from "../../icons/icons-components/arrow-down-icon/arrow-down-icon.component";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";

function Home() {
	const [state, setState] = useState({
		openAddTaskWindow: false,
		openAddEventWindow: false,
		pointerEvents: "",
	});

	const [tasks, setTasks] = useState([]);

	function openWindow(windowKey) {
		console.log(state[windowKey]);
		let currentState = { ...state };
		currentState.pointerEvents = "none";
		currentState[windowKey] = true;
		setState(currentState);
	}

	return (
		<section id='home-page'>
			<div style={{ pointerEvents: state.pointerEvents }} className='home-page-warpper'>
				<div className='home-page-left-side'>
					<header className='home-page-left-side-main-header'>
						<p className='home-page-left-side-header-content'>
							ערב טוב,
							<span className='home-page-left-side-header-content-username-name'>
								ישראל
							</span>
							!
						</p>
						<input
							className='home-page-left-side-main-input'
							type='text'
							placeholder={`חיפוש מהיר, (לדוג' שם קבוצה או שם הודעה..)`}
						/>
					</header>

					<div className='my-tasks-container'>
						<div className='my-tasks-main-header'>
							<p className='my-tasks-header-content'>המשימות שלי</p>
						</div>
						<div className='my-tasks-list'>
							{tasks.map((task) => {
								return (
									<div className='task-box-warpper'>
										<input type='radio' />
										<div className='task-box'>
											<div className='task-box-icons' >
												<div className='task-box-icons-warpper'>
												<ArrowDownIcon />
												</div>
												<div className='task-box-icons-warpper'>
													{/* <TrashIcon disabled={true}/> */}
												</div>
											</div>
											<p
												style={{
													backgroundColor: task.taskColor,
												}}
												className='importance-level'
											></p>
											{task.taskName}
										</div>
									</div>
								);
							})}
						</div>
						<div className='my-task-button-warpper'>
							<button
								disabled={state.openAddTaskWindow}
								onClick={() => openWindow("openAddTaskWindow")}
								className='add-new-task-button'
							>
								משימה חדשה
							</button>
						</div>
					</div>
				</div>
				<div className='home-page-right-side'>
					<div className='calander'>
						<div className='calander-date'>
							<p className='home-page-left-arrow'>left</p>
							<p className='home-page-date-content'>פברואר 2021</p>
							<p classNames='home-page-left-arrow'>right</p>
						</div>
						<div className='week-days-warpper'>
							<div className='week-days'>
								<p className='day'>א'</p>
								<p className='day'>ב'</p>
								<p className='day'>ג'</p>
								<p className='day'>ד'</p>
								<p className='day'>ה'</p>
								<p className='day'>ו'</p>
								<p className='day'>ש'</p>
							</div>
						</div>
						<div className='dates-list'></div>
					</div>
					<div className='home-page-events'>
						<div className='calander-date'>
							<p className='home-page-left-arrow'>left</p>
							<p className='home-page-date-content'>פברואר 2021</p>
							<p classNames='home-page-left-arrow'>right</p>
						</div>
						<div className='my-tasks-list'>
							<div className='task-box-warpper'>
								<div className='task-box'>
									<p className='importance-level'></p> שם האירוע
								</div>
							</div>
							<div className='task-box-warpper'>
								<div className='task-box'>
									<p className='importance-level'></p> שם האירוע
								</div>
							</div>
							<div className='task-box-warpper'>
								<div className='task-box'>
									<p className='importance-level'></p> שם האירוע
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
					tasksDetails={["משימה חדשה", "שם המשימה"]}
				/>
			)}
		</section>
	);
}

export default Home;
