import "./history-list.styles.css";
import React from "react";

function HistoryList() {
	return (
		<section id='hisotry-page'>
			<header className='history-page-main-header'>
				<div className='history-page-main-header-right-side'>
					<p className='history-page-main-header-text-content'>היסטורית הודעות</p>
				</div>
				<div className='history-page-main-header-left-side'>
					<input
						className='history-page-main-header-input'
						type='text'
						placeholder='חיפוש הודעה בהיסטוריה'
					/>
				</div>
			</header>

			<div className='history-page-list-container-header'>
				<div className='history-page-list-item-header'>
					<div className='history-page-list-first-item history-page-list-content-item-warpper-header'>
						<p className='history-page-content-header'>שם ההודעה</p>
						<span className='history-page-icon-header'>icon</span>
					</div>
					<div className='history-page-list-second-item history-page-list-content-item-warpper-header'>
						<p className='history-page-content-header'>שם הקבוצה</p>
						<span className='history-page-icon-header'>icon</span>
					</div>
					<div className='history-page-list-third-item history-page-list-content-item-warpper-header'>
						<p className='history-page-content-header'>תאריך שליחה</p>
						<span className='history-page-icon-header'>icon</span>
					</div>
					<div className='history-page-list-four-item history-page-list-content-item-warpper-header'>
						<p className='history-page-content-header'>קבצים מצורפים</p>
					</div>
				</div>
			</div>

			<div className='history-page-list-container'>
				<div className='history-page-list-item'>
					<div className='history-page-list-first-item history-page-list-content-item-warpper'>
						<p className='history-page-content'>שם ההודעה</p>
						<span className='history-page-icon'>icon</span>
					</div>
					<div className='history-page-list-second-item history-page-list-content-item-warpper '>
						<p className='history-page-content'>שם הקבוצה</p>
						<span className='history-page-icon'>icon</span>
					</div>
					<div className='history-page-list-third-item history-page-list-content-item-warpper '>
						<p className='history-page-content'>תאריך שליחה</p>
						<span className='history-page-icon'>icon</span>
					</div>
					<div className='history-page-list-four-item history-page-list-content-item-warpper '>
						<p className='history-page-content'>קבצים מצורפים</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HistoryList;
