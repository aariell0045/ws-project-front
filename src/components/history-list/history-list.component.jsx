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

			<div className='history-list-header-container-warpper'>
				<div className='history-list-header-container'>
					<div className='history-list-header-warpper'>
						<p
							style={{ paddingRight: "2vw" }}
							className='history-list-header-content'
						>
							שם ההודעה
						</p>
					</div>
					<div className='history-list-header-warpper'>
						<p className='history-list-header-content'>שם הקבוצה</p>
					</div>
					<div className='history-list-header-warpper'>
						<p className='history-list-header-content'>תאריך שליחה</p>
					</div>
					<div className='history-list-header-warpper'>
						<p className='history-list-header-content'>קבצים מצורפים</p>
					</div>
				</div>
			</div>
			<div className='history-list-container'>
				<div className='history-list-item'>
					<div className='history-list-item-warpper history-list-item-warpper-1'>
						<p className='history-list-item-content history-list-item-content-first-item'>
							שם ארוך של הודעה
						</p>
					</div>
					<div className='history-list-item-warpper history-list-item-warpper-2 '>
						<p className='history-list-item-content history-list-item-content-second'>מועדון ליצמן - בנות</p>
					</div>
					<div className='history-list-item-warpper history-list-item-warpper-3 '>
						<p className='history-list-item-content history-list-item-content-threed'> 18:13 1/3/2020</p>
					</div>
					<div className='history-list-item-warpper history-list-item-warpper-4 '>
						<p
					
							className='history-list-item-content history-list-item-content-last-item'
						>
							icon
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HistoryList;
