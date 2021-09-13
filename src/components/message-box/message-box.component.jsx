import "./message-box.styles.css";
import React from "react";

function MessageBox(props) {
	const { item } = props;
	console.log(props.item);
	return (
		<div className='message-box'>
			<header className='message-box-header'>
				<h3>{item[0]}</h3>
				<p>3 הודעות ברצף</p>
			</header>
			<div className='content'>
				<p>{}</p>
				<div className='media-footer'>media</div>
			</div>
		</div>
	);
}

export default MessageBox;
