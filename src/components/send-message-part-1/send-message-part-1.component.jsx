import "./send-message-part-1.styles.css";
import React from "react";
import MessageBox from "../message-box/message-box.component";

function SendMessagePart1() {
	return (
		<section id='send-message-part-1'>
			<div className='send-message-part-1-warpper'>
				<div className='send-message-part-1-right-side'>
					<header className='send-message-part-1-main-header'>
						<h2>יש לבחור את הקבוצה הרלוונטית</h2>
					</header>
					<input
						className='send-message-part-1-search-input'
						type='text'
						placeholder='חיפוש במאגר ההודעות'
					/>
					<div className='send-message-part-1-messages-list'>
						<MessageBox />
						<MessageBox />
						<MessageBox />
						<MessageBox />
						<MessageBox />
						<MessageBox />
					</div>
				</div>
				<div className='send-message-part-1-left-side'>
					<div className='send-message-part-1-left-side-background'></div>
					<div className='send-message-part-1-left-side-button-warpper' >
						<div className='send-message-part-1-left-side-button'>
							<div className='send-message-part-1-left-side-button-background'></div>
							יאללה, המשכנו
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SendMessagePart1;
