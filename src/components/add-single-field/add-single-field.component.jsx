import React from "react";
import "./add-single-field.styles.css";

function AddSingleField(props) {
	const [state, setState] = props.useState;
	const [container, containerList] = props.useTasks;
	const [firstField, secondField] = props.tasksDetails;
	function close() {
		setState({
			...state,
			[props.windowKey]: false,
		});
	}

	function handleInputs({ target }) {
		const { name, value } = target;
		state[name] = value;
	}

	return (
		<div className='add-single-field'>
			<header className='add-single-field-main-header'>
				<span onClick={close} className='close'>
					X
				</span>
			</header>
			<div className='add-single-field-input-container'>
				{firstField}:
				<input
					onKeyPress={(event) => {
						if (event.key === "Enter" && state) {
							setState({
								...state,
							});
							close();
						}
					}}
					name='messageName'
					onChange={(event) => handleInputs(event)}
					type='text'
				/>
			</div>
			<div className='add-single-field-button-container'>
				<button
					onClick={() => {
						if (state) {
							setState({
								...state,
							});
							close();
						}
					}}
					className=''
				>
					{secondField}
				</button>
			</div>
		</div>
	);
}

export default AddSingleField;
