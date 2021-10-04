import "./send-message-part-1.styles.css";
import React, { useEffect } from "react";
import MessageBox from "../message-box/message-box.component";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentMessage } from "../index.redux/actions/actions";

function SendMessagePart1() {
	const [messagesList, setMessagesList] = useState([]);
	const [currentMessage, setCurrentMessage] = useState({ messageName: "", contentMessage: [] });
	const [state, setState] = useState({ searchMessages: "" });

	const userId = useSelector((state) => state.userReducer.userId);
	const dispatch = useDispatch();

	useEffect(async () => {
		const response = await fetch(`http://localhost:8080/message/${userId}`);
		const data = await response.json();
		setMessagesList(data);
	}, []);

	function handleInputs({ target }) {
		const { name, value } = target;
		let currentState = { ...state };
		currentState[name] = value;
		setState(currentState);
	}

	function updateCurrentMessage(messageName, messagesInRow, id) {
		const newCurrentMessage = { ...currentMessage };
		newCurrentMessage.messageName = messageName;
		newCurrentMessage.contentMessage = messagesInRow;
		newCurrentMessage.id = id;
		setCurrentMessage(newCurrentMessage);
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
							messagesList.map((message) => {
								if (message.messageName.includes(state.searchMessages)) {
									return (
										<MessageBox
											key={message._id}
											id={message._id}
											messageName={message.messageName}
											messageLength={message.contentMessage.length}
											messagesInRow={message.contentMessage}
											deleteMessage={null}
											updateCurrentMessage={updateCurrentMessage}
											displayOnly={true}
										/>
									);
								}
								return null;
							})}
						{!state.searchMessages &&
							messagesList.map((message, index) => (
								<MessageBox
									key={message._id}
									id={message._id}
									messageName={message.messageName}
									messageLength={message.contentMessage.length}
									messagesInRow={message.contentMessage}
									deleteMessage={null}
									updateCurrentMessage={updateCurrentMessage}
									displayOnly={true}
								/>
							))}
					</div>
				</div>
				<div className='send-message-part-1-left-side'>
					<div className='send-message-part-1-left-side-background'></div>
					<header className='send-message-part-1-left-side-display-main-header'>
						<p>{currentMessage.messageName}</p>
					</header>
					<div className='send-messages-part-1-left-side-display-messagse-list'>
						{currentMessage.contentMessage.map((message) => {
							return (
								<div
									style={{
										maxWidth: "100%",
										width: "fit-content",
										height: "fit-content",
										display: "flex",
										justifyContent: "flex-start",
									}}
									id={message.id}
								>
									<img
										style={{ marginRight: "3vw" }}
										className='image-url-upload-media'
										src={message.mediaSrc}
										alt=''
									/>
									<div
										style={{ minWidth: "15vw" }}
										className='send-messages-part-1-left-side-message-field'
									>
										<div>
											<p>{message.contentField}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className='send-message-part-1-left-side-button-warpper'>
						<Link
							style={{ cursor: currentMessage && "pointer" }}
							to={currentMessage ? "/SendMessagePart2" : "/SendMessagePart1"}
						>
							<div
								onClick={() => {
									dispatch(fetchCurrentMessage(currentMessage));
								}}
								className='send-message-part-1-left-side-button'
							>
								<div
									style={{
										backgroundColor: currentMessage.contentMessage
											.length
											? "white"
											: "",
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
