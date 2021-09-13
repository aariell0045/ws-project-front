import "./messages-stock.styles.css";
import React, { useState } from "react";
import MessageBox from "../message-box/message-box.component";
import AddMessage from "../add-message/add-message.component";
import AddMessageIcon from "../../icons/icons-components/add-message/add-message.component";
import AddEvents from "../add-events/add-events.component";
import AddSingleField from "../add-single-field/add-single-field.component";
import AddMessageField from "../add-message-field/add-message-field.component";

const messages = [
	{ messageName: "ariel", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
	{ messageName: "ariel", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
	{ messageName: "toam", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
	{ messageName: "toam", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
];

function MessagesStock() {
	const [createMessage, setCreateMessage] = useState(false);
	const [messagesList, setMessageList] = useState([]);
	const [state, setState] = useState({
		searchMessages: "",
		messageName: "שם ההודעה",
		openAddMessageNameWindows: false,
		currentMessage: null,
		messages: [
			{
				id: "1",
				imageSrc: "",
				content: "",
				display: false,
				clear() {
					this.imageSrc = "";
					this.content = "";
				},
				afterDisplay() {
					return (
						<AddMessageField
							imageSrc={this.imageSrc}
							content={this.content}
							display={this.display}
							onFocus={this.onFocus}
							onChange={this.onChange}
							delete={this.delete}
							currentObject={this}
						/>
					);
				},
				toggle() {
					this.display = !this.display;
				},
				beforDisplay() {
					return (
						<div
							className='befor-display-message-stock'
							onClick={() => {
								debugger;
								this.toggle();
								let newObj = { ...state.messages[0] };
								state.messages.push({
									...newObj,
									id: +this.id + 1 + "",
									display: false,
									imageSrc: "",
									content: "",
								});

								setState({
									...state,
								});
							}}
						>
							<span>הוספת תת הודעה</span>
						</div>
					);
				},
				onFocus(currentObject) {
					state.currentMessage = currentObject;
					console.log(state);
					setState({
						...state,
					});
				},
				onChange(event) {
					state.currentMessage.content = event.target.innerText;

					setState({
						...state,
					});
				},
				delete(event, id) {
					let index = state.messages.findIndex((message) => message.id == id);
					if (index === 4) {
						state.messages.splice(index);
					} else {
						state.messages.splice(index, 1);
					}
					setState({
						...state,
					});
				},
			},
		],
	});
	console.log(messagesList);

	function handleInputs({ target }) {
		const { name, value } = target;
		let currentState = { ...state };
		currentState[name] = value;
		setState(currentState);
	}

	return (
		<section
			style={{
				backdropFilter: state.openAddMessageNameWindows && "blur(4px)",
			}}
			id='messages-stock'
		>
			{state.openAddMessageNameWindows && (
				<div className='messages-stock-background'></div>
			)}
			<div className='messages-stock-warpper'>
				<div className='messages-stock-left-side'>
					<header className='messages-stock-left-side-header'>
						<p>מאגר הודעות</p>
						<button
							onClick={(event) => {
								setCreateMessage(true);
								setState({
									...state,
									openAddMessageNameWindows: true,
								});
							}}
							className='messages-stock-right-side-button-add-new-message'
						>
							<AddMessageIcon />
						</button>
					</header>
					<input
						name='searchMessages'
						className='messages-stock-left-side-input'
						type='text'
						placeholder='חיפוש במאגר ההודעות'
						onChange={(event) => handleInputs(event)}
					/>

					<div className='messages-stock-list'>
						{state.searchMessages &&
							messagesList.map((message, index) => {
								if (message.messageName.includes(state.searchMessages)) {
									return (
										<MessageBox key={index} item={state.messages} />
									);
								} else {
									return null;
								}
							})}
						{!state.searchMessages &&
							messagesList.map((message, index) => {
								console.log(message);
								return <MessageBox key={index} item={message} />;
							})}
					</div>
				</div>
				<div className='messages-stock-right-side'>
					<div className='message-stock-right-side-background'></div>
					<div className='messsages-stock-tools'></div>
					<nav className='messeges-stcok-left-side-nav-bar'>
						<div>X</div>
						<div>icon</div>
						<div>icons</div>
						<button
							onClick={() => {
								debugger;
								messagesList.push([state.messageName, state.messages]);
								setMessageList([...messagesList]);
							}}
						>
							שמור
						</button>
					</nav>
					<div>
						{createMessage && (
							<AddMessage
								useState={[state, setState]}
								useTasks={[messagesList, setMessageList]}
							/>
						)}
					</div>
				</div>
			</div>
			{state.openAddMessageNameWindows && (
				<AddSingleField
					useState={[state, setState]}
					useTasks={[messagesList, setMessageList]}
					tasksDetails={["שם ההודעה", "הבא "]}
					windowKey='openAddMessageNameWindows'
				/>
			)}
		</section>
	);
}

export default MessagesStock;
