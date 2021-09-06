import "./add-messages.styles.css";
import React, { useState } from "react";

function AddMessage() {
	const [textareaLength2, setTextareaLength2] = useState(20);
	const [textareaClumnes2, setTextareaClumnes2] = useState(2);
	const SIZE = 60;
	const [inputs, setInputs] = useState([	<textarea
		style={{  padding: "2vh"}}
		onChange={(event) => {
			let value = event.target.value;
			let length = value.length;
			if (length > 5) {
				const newNumber = length + 1;
				setTextareaLength2(newNumber);
			} else {
				setTextareaClumnes2(2)
				setTextareaLength2(20);
			}

			if (textareaLength2 % SIZE === 0) {
				const newNumber = textareaClumnes2 + 1;
				setTextareaClumnes2(newNumber);
			}
		}}
		name=''
		id=''
		cols={textareaLength2 < SIZE ? textareaLength2 : SIZE}
		rows={textareaClumnes2}
	></textarea>])

	return (
		<section className='add-message'>
			<div className='message-name-warpper'>
				<header className='message-name'>
					<input className='create-message-header' type="text" placeholder="שם ההודעה" />
				</header>
				{inputs.map((textarea,index) => {
					if (index == inputs.length - 1) {
						return (
							<div>
								{textarea}
								<br />
							<span className='add-sub-message' >הוספת תת הודעה</span>
							</div>
							
						)
					}
					return (
					textarea
				)
			})}
			

			</div>
			<div className='add-message-footer' >
				<button className='add-contact-name'>
				@ הוספת תבנית שם 
				</button>
				<button className='add-message-tool'>
				B 
				</button>
				<button className='add-message-tool'>
				<em>I</em> 
				</button>
				<button className='add-message-tool'>
				icon 
				</button>
				<button className='add-message-tool'>
				icon 
				</button>
			</div>
		</section>
	);
}

export default AddMessage;
