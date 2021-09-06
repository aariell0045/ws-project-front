import React from 'react';
import Clock from '../clock/Clock.component';
import "./home.styles.css"

const weekDays = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'","ש'"];
let mounth = [];

function Home() {
	return (
		<section id='home-page' >
			<div className='home-page-header' >
				<div className='search-plus-header-warper' >
					<h2 className='username-header' >משפט מגניב, <span>עומר!</span></h2>
					<input className='fast-search-input' type="text" placeholder="חיפוש מהיר" />
				</div>
				<Clock />
			</div>

			<main id='home-main-content'>
				<div className='main-content-right-side' >
						<div className='container-1' >
							<div className='container-1-1' >
								<h3 className='my-tasks-headers' >המשימות שלי</h3>
								<button className='my-tasks-button' >הוספת משימה</button>
							</div>
						</div>
						<div className='container-3' >
						<div className='container-3-3' >
							<h3 className='recently-preformed-header' >בוצע לאחרונה</h3>
							<span className='recently-preformed-link' >הצג הכל</span>
						</div>
					</div>
				</div>
				<div className='main-content-left-side' >
					<div className='container-2' >
						<div className='container-2-2'>
								<span>right</span>
								<span>{new Date().toLocaleDateString()}</span>
								<span>left</span>
						</div>
						<div className='container-4' >
							<div className='container-shadow-4-4' ></div>

							<div className='container-4-4'>
									<span>יום שישי, 2021/2/15</span>
							</div>
							<div className='container-4-4-main-content' >

							</div>
							<div className='container-4-footer'>
								<button className='event-button' >הוספת אירוע</button>
							</div>
						</div>
					</div>
					
				</div>

			
					
			</main>


		
		</section>
	)

}

export default Home