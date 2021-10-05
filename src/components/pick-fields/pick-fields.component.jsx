import React, { useState } from "react";
import "./pick-fields.styles.css";

function PickFields(props) {
	const { setCheckFields, checkFields, setOpenPickFields } = props;
	const [fieldsObject, setFieldsObject] = useState({
		firstname: checkFields.firstname ? true : false,
		lastname: checkFields.lastname ? true : false,
		age: checkFields.age ? true : false,
		email: checkFields.email ? true : false,
		birthday: checkFields.birthday ? true : false,
		gender: checkFields.gender ? true : false,
	});
	function reset() {
		setOpenPickFields(false);
	}

	function handleInputs(event) {
		const { id } = event.target;
		setFieldsObject({
			...fieldsObject,
			[id]: !fieldsObject[id],
		});
	}

	function saveChanges() {
		setCheckFields({
			...checkFields,
			...fieldsObject,
		});
		setOpenPickFields(false);
	}

	console.log(checkFields);
	return (
		<div className='pick-fields-canvas'>
			<header className='pick-fields-header'>
				<div onClick={reset}>X</div>
			</header>
			<div className='pick-fields-main-content'>
				<div
					onClick={(event) => handleInputs(event)}
					id='firstname'
					className='field-warpper'
				>
					שם פרטי:
					<input type='checkbox' checked={fieldsObject.firstname} id='' />
				</div>
				<div
					onClick={(event) => handleInputs(event)}
					id='lastname'
					className='field-warpper'
				>
					שם משפחה:
					<input type='checkbox' checked={fieldsObject.lastname} id='' />
				</div>
				<div
					onClick={(event) => handleInputs(event)}
					id='email'
					className='field-warpper'
				>
					אמייל:
					<input type='checkbox' checked={fieldsObject.email} id='' />
				</div>
				<div
					onClick={(event) => handleInputs(event)}
					id='age'
					className='field-warpper'
				>
					גיל
					<input type='checkbox' checked={fieldsObject.age} id='' />
				</div>
				<div
					onClick={(event) => handleInputs(event)}
					id='birthday'
					className='field-warpper'
				>
					תאריך לידה:
					<input type='checkbox' checked={fieldsObject.birthday} id='' />
				</div>
				<div
					onClick={(event) => handleInputs(event)}
					id='gender'
					className='field-warpper'
				>
					מגדר:
					<input type='checkbox' checked={fieldsObject.gender} id='' />
				</div>
			</div>
			<button className='pick-field-save-changes-button' onClick={saveChanges}>
				בחר
			</button>
		</div>
	);
}

export default PickFields;
