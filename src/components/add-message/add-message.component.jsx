import "./add-messages.styles.css";
import React, { useState } from "react";
import AddEvents from "../add-events/add-events.component";

function AddMessage(props) {
	const [state, setState] = props.useState;

	function handleFieldsErea(event, index) {
		let { value } = event.target;
		state.fieldsErea[index] = value;
		setState({
			...state,
		});
	}
	console.log(state.fieldsErea[0].length + 30);
	return (
		<section className='add-message'>
			<div className='message-name-warpper'>
				<header className='message-name'>
					<div
						onClick={() => {
							let currentState = { ...state };
							currentState.openAddMessageNameWindows = true;
							setState(currentState);
						}}
						className='create-message-header'
					>
						{state.messageName}
					</div>
				</header>
				<div className='message-content-warpper'>
					{state.fieldsErea[0] && (
						<textarea
							value={state.fieldsErea[0].trimStart()}
							onChange={(event) => handleFieldsErea(event, 0)}
							style={{ padding: "2vh" }}
							name=''
							id=''
							cols={
								state.fieldsErea[0].length < 30
									? state.fieldsErea[0].length + 30
									: 75
							}
							rows={state.fieldsErea[0].length / 50}
						></textarea>
					)}
					{state.fieldsErea[1] && (
						<textarea
							value={state.fieldsErea[1]}
							onChange={(event) => handleFieldsErea(event, 1)}
							style={{ padding: "2vh" }}
							name=''
							id=''
							cols={30}
							rows={3}
						></textarea>
					)}
					{state.fieldsErea[2] && (
						<textarea
							value={state.fieldsErea[2]}
							onChange={(event) => handleFieldsErea(event, 2)}
							style={{ padding: "2vh" }}
							name=''
							id=''
							cols={30}
							rows={3}
						></textarea>
					)}
					<br />
					<span
						onClick={() => {
							for (let i = 0; i < state.fieldsErea.length; i++) {
								if (!state.fieldsErea[i]) {
									return (state.fieldsErea[i] = " ");
								}
								setState({
									...state,
								});
							}
						}}
						className='add-sub-message'
					>
						הוספת תת הודעה
					</span>
				</div>
			</div>
			<div className='add-message-footer'>
				<button className='add-contact-name'>@ הוספת תבנית שם</button>
				<button className='add-message-tool'>B</button>
				<button className='add-message-tool'>
					<em>I</em>
				</button>
				<button className='add-message-tool'>icon</button>
				<button className='add-message-tool'>icon</button>
			</div>
		</section>
	);
}

export default AddMessage;
