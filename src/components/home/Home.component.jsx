import React, { useState } from "react";

import "./home.styles.css";
import Calender from "../calender/calender.component";
import Tasks from "../tasks/tasks.component";

function Home() {
	const [state, setState] = useState({
		pointerEvents: "",
	});

	return (
		<section id="home-page">
			<div style={{ pointerEvents: state.pointerEvents }} className="home-page-warpper">
				<div className="home-page-right-side">
					<header className="home-page-left-side-main-header">
						<p className="home-page-left-side-header-content">
							ערב טוב,
							<span className="home-page-left-side-header-content-username-name">ישראל</span>!
						</p>
						<input
							className="home-page-left-side-main-input"
							type="text"
							placeholder={`חיפוש מהיר, (לדוג' שם קבוצה או שם הודעה..)`}
						/>
					</header>

					<div className="my-tasks-container">
						<Tasks />
					</div>
				</div>

				<div className="home-page-left-side">
					<div className="home-page-right-warpper">
						<Calender />
						<div className="home-page-events"></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
