import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './groups.styles.css'
function GroupsList() {
	const [groupOrContactSearch, setGroupOrContactSearch] = useState("group")
	return (
		<section id='groups-page'>
			<div className='groups-page-header' >
				<div className='right-contnet-header-groups-page' >
					<input className='search-groups-and-contacts-input' placeholder={
						groupOrContactSearch === "group" ? "חיפוש קבוצה" : "חיפוש איש קשר"} type="text"/> 
											{/* it is the opposite            ^false^         ^true^  */}
					<div className='button-search-container' >
						<div className='button-search-container-background' ></div>
						<span
							onClick={() => setGroupOrContactSearch("group")} className={groupOrContactSearch === "group" ?
							"button-search-by-group-in-focos" : "button-search-by-group"}
						>
							קבוצה		
						</span>

						<span
							onClick={() => setGroupOrContactSearch("contact")}
							className={groupOrContactSearch === "contact" ?"button-search-by-contact-in-focos" : "button-search-by-contact"}
						>
							איש קשר
						</span>
					</div>
				</div>
				<div className='left-contnet-header-groups-page' >
					<div className='buttons-combine-and-create-groups-container' >
						<Link to='AddGroup' >
						<button className='button-create' >קבוצה חדשה</button>	
						</Link>
						<button className='button-combine' >איחוד קבוצות</button>	
					</div>
				</div>
			</div>
				
			<main id='groups-page-main-content' >

				<div className='groups-page-main-content-background' ></div>
				<div className='main-content-header' >
					<h2>כל הקבוצות שלי</h2>
				</div>
				<div className='groups-list' >
					<div className="group-box-container" >
						<div className='group-box-1' >
							<span className='group-name' >שם הקבוצה</span>
						</div>

						<div className='group-box-2' >
							<span className='group-length' >100 אנשי קשר</span>
						</div>
						<div className='group-box-3' >
							<Link to='/Group' >
							<span className='group-profile' >הצג</span>
							</Link>
							<span className='group-profile' >Trash</span>
						</div>
					</div>
				</div>
			</main>
		</section>
)
}

export default GroupsList