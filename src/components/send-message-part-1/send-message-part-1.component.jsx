import "./send-message-part-1.styles.css";
import React from "react";
import MessageBox from "../message-box/message-box.component";
import { Link } from "react-router-dom";
import { useState } from "react";

const messages = [
	{
		id: "1",
		messageName: "ariel",
		contentMessage: [{ contentField: "שלום מה קורה אחשלי היקר מכל!!!!!", mediaSrc: "" }],
	},
	{
		id: "2",
		messageName: "ariel",
		contentMessage: [
			{
				contentField:
					"שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!",
				mediaSrc: "",
			},
			{
				contentField:
					"שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!",
				mediaSrc: "",
			},
			{
				contentField:
					"שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!",
				mediaSrc: "",
			},
			{
				contentField:
					"שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!שלום מה קורה אחשלי היקר מכל!!!!!",
				mediaSrc: "",
			},
		],
	},
	{
		id: "3",
		messageName: "toam",
		contentMessage: [{ contentField: "שלום מה קורה אחשלי היקר מכל!!!!!", mediaSrc: "" }],
	},
	{
		id: "4",
		messageName: "toam",
		contentMessage: [{ contentField: "שלום מה קורה אחשלי היקר מכל!!!!!", mediaSrc: "" }],
	},
];

function SendMessagePart1() {
	const [messagesList, setMessageList] = useState(messages);
	const [displayMessage, setDispalyMessage] = useState(null);
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
		<section id='send-message-part-1'>
			<div className='send-message-part-1-warpper'>
				<div className='send-message-part-1-right-side'>
					<header className='send-message-part-1-main-header'>
						<p>יש לבחור את ההודעה אותה תרצה לשלוח:</p>
					</header>
					<input
						name='searchMessages'
						className='send-message-part-1-search-input'
						type='text'
						placeholder='חיפוש במאגר ההודעות'
						onChange={(event) => handleInputs(event)}
					/>
					<div className='send-message-part-1-messages-list'>
						{state.searchMessages &&
							messagesList.map((message, index) => {
								if (message.messageName.includes(state.searchMessages)) {
									let useDisplayMessageState = [
										displayMessage,
										setDispalyMessage,
									];
									return (
										<MessageBox
											key={index}
											id={message.id}
											item={[
												message.messageName,
												message.contentMessage.length,
												message.contentMessage,
											]}
											useDisplayMessageState={
												useDisplayMessageState
											}
										/>
									);
								} else {
									return null;
								}
							})}
						{!state.searchMessages &&
							messagesList.map((message, index) => {
								let useDisplayMessageState = [
									displayMessage,
									setDispalyMessage,
								];
								return (
									<MessageBox
										key={index}
										id={message.id}
										item={[
											message.messageName,
											message.contentMessage.length,
											message.contentMessage,
										]}
										useDisplayMessageState={useDisplayMessageState}
									/>
								);
							})}
					</div>
				</div>
				<div className='send-message-part-1-left-side'>
					<div className='send-message-part-1-left-side-background'></div>
					{displayMessage && (
						<header className='send-message-part-1-left-side-display-main-header'>
							<p>{displayMessage.messageName}</p>
						</header>
					)}
					<div className='send-messages-part-1-left-side-display-messagse-list'>
						{displayMessage
							? displayMessage.contentMessage.map((message) => {
									return (
										<div
											style={{
												width: "fit-content",
												height: "fit-content",
											}}
											id={message.id}
										>
											<img
												className='upload-media'
												src={message.mediaSrc}
												alt=''
											/>
											<div className='send-messages-part-1-left-side-message-field'>
												<div contentEditable={false}>
													<p>{message.contentField}</p>
												</div>
											</div>
										</div>
									);
							  })
							: null}
					</div>
					<div className='send-message-part-1-left-side-button-warpper'>
						<Link
							style={{ cursor: displayMessage && "pointer" }}
							to={displayMessage ? "/SendMessagePart2" : "/SendMessagePart1"}
						>
							<div className='send-message-part-1-left-side-button'>
								<div
									style={{
										backgroundColor: displayMessage ? "white" : "",
									}}
									className='send-message-part-1-left-side-button-background'
								></div>
								יאללה, המשכנו
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SendMessagePart1;
