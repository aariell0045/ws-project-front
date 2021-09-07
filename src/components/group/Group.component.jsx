import React from 'react';
import "./group.styles.css";
import ContactBox from '../contact-box/contact-box.components';

function Group() {

	return (
		<section id='group-page'>
			<div className='group-header'>
				<input className='search-contact-in-group-input' type="text" placeholder='חיפוש איש קשר מהרשימה' />
				<button className='add-contact-button' >איש קשר חדש</button>
			</div>
			<main id='group-main-content'>
				<div className='group-main-content-background' ></div>
				<div className='group-main-content-header'>
					<span><span className='group-name-bold' >שם הקבוצה</span> - מספר המשתתפים</span>
				</div>
				<div className='main-content-contact-list-header'>
					<div className='main-content-contact-list-header-first-column' >
						<span>שם פרטי</span>
					</div>
					<div className='main-content-contact-list-header-second-column' >
						<span>שם משפחה</span>
					</div>
					<div className='main-content-contact-list-header-third-column' >
						<span>טלפון</span>
					</div>
				</div>
				<div className='contacts-list' >
					<ContactBox/>
	
				</div>
			</main>
		</section>
	)
}



export default Group