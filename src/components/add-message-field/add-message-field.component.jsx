import React from "react";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
function AddMessageField(props) {
	console.log(props.content);

	return (
		<div
			onFocus={() => props.onFocus(props.currentObject)}
			className='message-content-container'
		>
			<span
				onClick={(event) => props.delete(event, props.currentObject.id)}
				className='add-message-trash-icon'
			>
				<TrashIcon disabled={true} />
			</span>
			<img src={props.imageSrc} alt='' />
			<div
				value={props.content}
				onInput={(event) => {
					props.onChange(event, props.content);
				}}
				className='message-content'
				style={{ width: "100%", height: "100%" }}
				contentEditable='true'
			></div>
		</div>
	);
}

export default AddMessageField;
