import "./messages-stock.styles.css";
import React, { useState } from "react";
import MessageBox from "../message-box/message-box.component";
import AddMessage from "../add-message/add-message.component";

function MessagesStock() {
	const [createMessage, setCreateMessage] = useState(false);
	console.log(createMessage);
	return (
		<section id='messages-stock'>
			<div className='messages-stock-warpper'>
				<div className='messages-stock-left-side'>
					<header className='messages-stock-left-side-header'>
						<h2>
						מאגר הודעות
						</h2>
					</header>
					<input className='messages-stcok-left-side-input' type="text" placeholder="חיפוש במאגר ההודעות" />

					<div className='messages-stcok-list'>
							<MessageBox />
							<MessageBox />
							<MessageBox />
							<MessageBox />
							<MessageBox />
					</div>
				</div>
				<div className='messages-stock-right-side'>
					<div className='message-stock-right-side-background'></div>
					<div className='messsages-stock-tools' >
						<span onClick={(event) => setCreateMessage(!createMessage)} className={createMessage ? 'new-message-tool new-message-tool-active': 'new-message-tool'}>
							{ "icon" }
						</span>
					</div>
						<div>
						{createMessage && <AddMessage/> }
						</div>
				</div>
			</div>
		</section>
	)
}

export default MessagesStock;