import React from "react";
import "./home.styles.css";

function Home() {
	return (
		<section id='home-page'>
			<div className='home-page-warpper'>
				<div className='home-page-left-side'>
					<header className='home-page-left-side-main-header'>
						<p className='home-page-left-side-header-content'>
							ערב טוב,{" "}
							<span className='home-page-left-side-header-content-username-name'>
								ישראל
							</span>
							!
						</p>
						<input
							className='home-page-left-side-main-input'
							type='text'
							placeholder={`חיפוש מהיר, )לדוג' שם קבוצה או שם הודעה..(`}
						/>
					</header>

					<div className='my-tasks-container'>
						<div className='my-tasks-main-header'>
							<p className='my-tasks-header-content'>המשימות שלי</p>
						</div>
						<div className='my-tasks-list'>
							<div className='task-box-warpper'>
								<input type='radio' />
								<div className='task-box'>
									<p className='importance-level'></p> שם המשימה
								</div>
							</div>
							<div className='task-box-warpper'>
								<input type='radio' />
								<div className='task-box'>
									<p className='importance-level'></p> שם המשימה
								</div>
							</div>
							<div className='task-box-warpper'>
								<input type='radio' />
								<div className='task-box'>
									<p className='importance-level'></p> שם המשימה
								</div>
							</div>
						</div>
						<div className='my-task-button-warpper'>
							<button className='add-new-task-button'>משימה חדשה</button>
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
									<p className='importance-level'></p> שם האירוע</div>
							</div>
							<div className='task-box-warpper'>
								
								<div className='task-box'>
									<p className='importance-level'></p> שם האירוע</div>
							</div>
							<div className='task-box-warpper'>  
								
								<div className='task-box'>
									<p className='importance-level'></p> שם האירוע</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
