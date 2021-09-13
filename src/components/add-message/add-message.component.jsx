import "./add-messages.styles.css";
import React, { useState } from "react";
import AddEvents from "../add-events/add-events.component";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";

function AddMessage(props) {
	const [state, setState] = props.useState;
	console.log(state);
	function handleFieldsErea(event, index) {
		let { value } = event.target;
		if (index === 0 && value === "") {
			value = " ";
		}
		state.fieldsErea[index] = value;
		setState({
			...state,
		});
	}

	function clearFeild(index) {
		debugger;
		if (index === 0) {
			state.fieldsErea[index] = " ";
		} else {
			state.fieldsErea[index] = "";
		}
		setState({
			...state,
		});
	}

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
						<div className='message-content-texterea-warpper'>
							<div
								onClick={() => clearFeild(0)}
								style={{
									top: `${
										Math.floor(
											(state.fieldsErea[0].length / 75 + 1) * 2
										) + "vh"
									}`,
								}}
								className='message-content-trash-icon'
							>
								<TrashIcon disabled />
							</div>
							<textarea
								value={state.fieldsErea[0].trimStart()}
								onFocus={() => {
									state.currrentField = 0;
									setState({
										...state,
									});
								}}
								onChange={(event) => handleFieldsErea(event, 0)}
								style={{ padding: "2vh", paddingLeft: "4vw" }}
								name=''
								id=''
								cols={
									state.fieldsErea[0].length < 74
										? state.fieldsErea[0].length + 1
										: 75
								}
								rows={state.fieldsErea[0].length / 70 + 1}
							></textarea>
						</div>
					)}

					{state.fieldsErea[1] && (
						<div className='message-content-texterea-warpper'>
							<div
								onClick={() => clearFeild(1)}
								style={{
									top: `${
										Math.floor(
											(state.fieldsErea[1].length / 75 + 1) * 2
										) + "vh"
									}`,
								}}
								className='message-content-trash-icon'
							>
								<TrashIcon disabled />
							</div>
							<textarea
								value={state.fieldsErea[1].trimStart()}
								onFocus={() => {
									state.currrentField = 1;
									setState({
										...state,
									});
								}}
								onChange={(event) => handleFieldsErea(event, 1)}
								style={{ padding: "2vh", paddingLeft: "4vw" }}
								name=''
								id=''
								cols={
									state.fieldsErea[1].length < 75
										? state.fieldsErea[1].length
										: 75
								}
								rows={state.fieldsErea[1].length / 70 + 1}
							></textarea>
						</div>
					)}

					{state.fieldsErea[2] && (
						<div className='message-content-texterea-warpper'>
							<div
								onClick={() => clearFeild(2)}
								style={{
									top: `${
										Math.floor(
											(state.fieldsErea[2].length / 75 + 1) * 2
										) + "vh"
									}`,
								}}
								className='message-content-trash-icon'
							>
								<TrashIcon disabled />
							</div>
							<textarea
								value={state.fieldsErea[2].trimStart()}
								onFocus={() => {
									state.currrentField = 2;
									setState({
										...state,
									});
								}}
								onChange={(event) => handleFieldsErea(event, 2)}
								style={{ padding: "2vh", paddingLeft: "4vw" }}
								name=''
								id=''
								cols={
									state.fieldsErea[2].length < 75
										? state.fieldsErea[2].length
										: 75
								}
								rows={state.fieldsErea[2].length / 70 + 1}
							></textarea>
						</div>
					)}
					<br />
					{(!state.fieldsErea[2] || !state.fieldsErea[1]) && (
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
					)}
				</div>
			</div>
			<div className='add-message-footer'>
				<button
					onClick={() => {
						let index = state.currrentField;
						state.fieldsErea[index] = state.fieldsErea[index].trimEnd() + " @ ";
						setState({
							...state,
						});
					}}
					className='add-contact-name'
				>
					@ הוספת תבנית שם
				</button>
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
