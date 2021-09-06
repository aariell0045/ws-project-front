import "./message-box.styles.css";
import React from "react";

function MessageBox() {
	return (
		<div className="message-box">
			<header className='message-box-header'>
				 <h3>שם ההודעה</h3>
				 <p>3 הודעות ברצף</p>
			</header>
			<div className='content'>
				<p >
				זו הודעה ארוכה במיוחד זו הודעה ארוכה במיוחד זו הודעה ארוכה במיוחד זו הודעה ארוכה במיוחד זו הודעה ארוכה במיוחד זו הודעה ארוכה במיוחד זו הודעה ארוכה במיוחד
				</p>
				<div className='media-footer' >
					media
				</div>
			</div>

		</div>
	)
}

export default MessageBox