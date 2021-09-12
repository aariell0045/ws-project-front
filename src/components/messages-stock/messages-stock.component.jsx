import "./messages-stock.styles.css";
import React, { useState } from "react";
import MessageBox from "../message-box/message-box.component";
import AddMessage from "../add-message/add-message.component";
import AddMessageIcon from "../../icons/icons-components/add-message/add-message.component";

const messages = [
	{ messageName: "ariel", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
	{ messageName: "ariel", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
	{ messageName: "toam", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
	{ messageName: "toam", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
];

function MessagesStock() {
	const [createMessage, setCreateMessage] = useState(false);
	const [messagesList, setMessageList] = useState(messages);
	const [state, setState] = useState({
		searchMessages: "",
	});

	function handleInputs({ target }) {
		const { name, value } = target;
		let currentState = { ...state };
		currentState[name] = value;
		setState(currentState);
	}

	return (
		<section id='messages-stock'>
			<div className='messages-stock-warpper'>
				<div className='messages-stock-left-side'>
					<header className='messages-stock-left-side-header'>
						<p>מאגר הודעות</p>
						<button
							onClick={(event) => setCreateMessage(!createMessage)}
							className='messages-stock-right-side-button-add-new-message'
						>
              <AddMessageIcon />
						</button>
					</header>
					<input
						name='searchMessages'
						className='messages-stcok-left-side-input'
						type='text'
						placeholder='חיפוש במאגר ההודעות'
						onChange={(event) => handleInputs(event)}
					/>

					<div className='messages-stcok-list'>
						{state.searchMessages &&
							messagesList.map((message, index) => {
								if (message.messageName.includes(state.searchMessages)) {
									return (
										<MessageBox
											key={index}
											item={[
												message.messageName,
												message.contentMessage,
											]}
										/>
									);
								} else {
									return null;
								}
							})}
						{!state.searchMessages &&
							messagesList.map((message, index) => {
								return (
									<MessageBox
										key={index}
										item={[
											message.messageName,
											message.contentMessage,
										]}
									/>
								);
							})}
					</div>
				</div>
				<div className='messages-stock-right-side'>
					<div className='message-stock-right-side-background'></div>
					<div className='messsages-stock-tools'>
						<span
							className={
								createMessage
									? "new-message-tool new-message-tool-active"
									: "new-message-tool"
							}
						>
							{"icon"}
						</span>
					</div>
					<div>{createMessage && <AddMessage />}</div>
				</div>
			</div>
		</section>
	);
}

export default MessagesStock;
