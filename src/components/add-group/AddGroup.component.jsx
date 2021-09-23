import React, { useState } from "react";
import MaterialUiSelect from "../../Material-Ui-Components/Select.component";
import "./add-group.styles.css";
import { Link } from "react-router-dom";

const OPTIONS = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

function uploadXlsxFormat() {
	return (
		<section id='xlsx-upload-format'>
			<div className='xlsx-upload-format-header'>
				<span>הגדרת עמודות:</span>
			</div>
			<div className='process-explantion'>
				<span>אנא הוסיפו את מספר העמודות הרלוונטיות לכל קטגוריה מתוך הקובץ</span>
			</div>
			<div className='selects-container'>
				<div className='custom-select'>
					<select name='' id=''>
						<option value=''>{"PHONE"}</option>
						{OPTIONS.map((letter, index) => {
							return <option value=''>{letter}</option>;
						})}
					</select>
					<span className='custom-arrow'></span>
				</div>
				<div className='custom-select'>
					<select name='' id=''>
						<option value=''>{"FIRSTNAME"}</option>
						{OPTIONS.map((letter, index) => {
							return <option value=''>{letter}</option>;
						})}
					</select>
					<span className='custom-arrow'></span>
				</div>
				<div className='custom-select'>
					<select name='' id=''>
						<option value=''>{"LASTNAME"}</option>
						{OPTIONS.map((letter, index) => {
							return <option value=''>{letter}</option>;
						})}
					</select>
					<span className='custom-arrow'></span>
				</div>
				<div className='custom-select'>
					<select name='' id=''>
						<option value=''>{"EMAIL"}</option>
						{OPTIONS.map((letter, index) => {
							return <option value=''>{letter}</option>;
						})}
					</select>
					<span className='custom-arrow'></span>
				</div>
				<div className='custom-select'>
					<select name='' id=''>
						<option value=''>{"DISCRIPTION"}</option>
						{OPTIONS.map((letter, index) => {
							return <option value=''>{letter}</option>;
						})}
					</select>
					<span className='custom-arrow'></span>
				</div>
				<div className='custom-select'>
					<select name='' id=''>
						<option value=''>{"BIRTHDAY"}</option>
						{OPTIONS.map((letter, index) => {
							return <option value=''>{letter}</option>;
						})}
					</select>
					<span className='custom-arrow'></span>
				</div>
				<div className='custom-select'>
					<select name='' id=''>
						<option value=''>{"AGE"}</option>
						{OPTIONS.map((letter, index) => {
							return <option value=''>{letter}</option>;
						})}
					</select>
					<span className='custom-arrow'></span>
				</div>
			</div>
		</section>
	);
}

function AddGroup() {
	const [uploadFileWith, setUploadFile] = useState("xlsx");

	return (
		<section id='add-group-page'>
			<div className='back-to-group'>
				<Link to='/Groups'>
					<span>חזרה לכל הקבוצות</span>
				</Link>
			</div>
			<main id='main-add-group-content'>
				<div className='main-add-group-content-background'></div>
				<div className='main-add-group-content-header'>
					<span>יצירת קבוצה חדשה</span>
				</div>
				<div className='warper-adding-name-input'>
					<span className='span-explnation-for-input'>שם הקבוצה: </span>
					<input
						className='input-adding-group-name'
						type='text'
						placeholder='שם הקבוצה החדשה'
					/>
				</div>
				<div className='upload-contact-from-header'>
					<span>העלאת אנשי קשר מתוך:</span>
				</div>

				<div className='upload-container'>
					<div onClick={() => setUploadFile("xlsx")} className='xlsx-icon-container'>
						<span>icon</span>
					</div>
					<div
						onClick={() => setUploadFile("phone")}
						className='phone-icon-container'
					>
						<span>icon</span>
					</div>
				</div>
				{uploadFileWith === "xlsx" ? uploadXlsxFormat() : null}
			</main>
		</section>
	);
}

export default AddGroup;
