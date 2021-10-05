import React, { useState } from "react";
import "./add-group.styles.css";
import { Link } from "react-router-dom";
import PickFields from "../pick-fields/pick-fields.component";
import ExcelIcon from "../../icons/icons-components/excel-icon/excel-icon.component";
import PhoneIcon from "../../icons/icons-components/phone-icon/phone-icon.component";
import * as XLSX from "xlsx";
import { getByPlaceholderText } from "@testing-library/dom";
import { useSelector } from "react-redux";


function uploadXlsxFormat(setOpenPickFields, checkFields, handleInputs) {
	return (
		<section id='xlsx-upload-format'>
			<div className='xlsx-upload-format-header'>
				<span>הגדרת עמודות:</span>
			</div>
			<div className='process-explantion'>
				<span>
					אנא רשמו את העמודה הרלוונטית מתוך הקובץ בהתאמה לכל קטגוריה (לדוגמא: A){" "}
				</span>
			</div>
			<div className='selects-container'>
				<div classNames='xlsx-upload-format-input-warpper'>
					<div className='xlsx-upload-format-input-box'>
						<input
							onChange={(event) => handleInputs(event)}
							name='phoneNumber'
							maxLength='1'
							type='text'
						/>
					</div>
					<div className='xlsx-upload-format-input-header'>פלאפון</div>
				</div>
				{checkFields.firstname && (
					<div classNames='xlsx-upload-format-input-warpper'>
						<div className='xlsx-upload-format-input-box'>
							<input
								onChange={(event) => handleInputs(event)}
								name='firstname'
								maxLength='1'
								type='text'
							/>
						</div>
						<div className='xlsx-upload-format-input-header'>שם פרטי</div>
					</div>
				)}
				{checkFields.lastname && (
					<div classNames='xlsx-upload-format-input-warpper'>
						<div className='xlsx-upload-format-input-box'>
							<input
								onChange={(event) => handleInputs(event)}
								name='lastname'
								maxLength='1'
								type='text'
							/>
						</div>
						<div className='xlsx-upload-format-input-header'>שם משפחה</div>
					</div>
				)}
				{checkFields.emial && (
					<div classNames='xlsx-upload-format-input-warpper'>
						<div className='xlsx-upload-format-input-box'>
							<input
								onChange={(event) => handleInputs(event)}
								name='emial'
								maxLength='1'
								
								type='text'
							/>
						</div>
						<div className='xlsx-upload-format-input-header'>אמייל</div>
					</div>
				)}
				{checkFields.gender && (
					<div classNames='xlsx-upload-format-input-warpper'>
						<div className='xlsx-upload-format-input-box'>
							<input
								onChange={(event) => handleInputs(event)}
								name='gender'
								maxLength='1'
								type='text'
							/>
						</div>
						<div className='xlsx-upload-format-input-header'>מגדר</div>
					</div>
				)}
				{checkFields.age && (
					<div classNames='xlsx-upload-format-input-warpper'>
						<div className='xlsx-upload-format-input-box'>
							<input
								onChange={(event) => handleInputs(event)}
								name='age'
								maxLength='1'
								type='text'
							/>
						</div>
						<div className='xlsx-upload-format-input-header'>גיל</div>
					</div>
				)}
				{checkFields.birthday && (
					<div classNames='xlsx-upload-format-input-warpper'>
						<div className='xlsx-upload-format-input-box'>
							<input
								onChange={(event) => handleInputs(event)}
								name='birthday'
								maxLength='1'
								type='text'
							/>
						</div>
						<div className='xlsx-upload-format-input-header'>תאריך לידה</div>
					</div>
				)}
				<button
					className='xlsx-upload-format-button-columns'
					onClick={() => setOpenPickFields(true)}
				>
					בחר עמודות
				</button>
			</div>
		</section>
	);
}

function AddGroup() {
	const [uploadFileWith, setUploadFile] = useState("xlsx");
	const [groupName, setGroupName] = useState("");
	const [openPickFields, setOpenPickFields] = useState(false);
	const [checkFields, setCheckFields] = useState({
		firstname: false,
		lastname: false,
		gender: false,
		age: false,
		birthdate: false,
		email: false,
	});
	const [fileProfile, setFileProfile] = useState({
		phoneNumber: "",
		firstname: "",
		lastname: "",
		gender: "",
		age: "",
		birthdate: "",
		email: "",
	});

	console.log(fileProfile);
	
	const userId = useSelector((state) => state.userReducer.userId);

	function handleInputs(event) {
		const { name, value } = event.target;
		setFileProfile({
			...fileProfile,
			[name]: value,
		});
	}

	async function uploadExcelFile(file) {
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);

		reader.onload = async (event) => {
			const arrayBuffer = event.target.result;
			const workbook = XLSX.read(arrayBuffer, { type: "buffer" });
			const workSheetName = workbook.SheetNames[0];
			const workSheet = workbook.Sheets[workSheetName];
			const data = await XLSX.utils.sheet_to_json(workSheet);
			let ws = [];
			for (let i = 0; i < data.length - 1; i++) {
				let tempArray = [];
				for (let key in data[i]) {
					tempArray.push(data[i][key]);
				}
				ws.push(tempArray);
			}
			const response = await fetch("http://localhost:8080/group", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					excelFile: ws,
					profile: fileProfile,
					userId: userId,
					groupName: groupName,
				}),
			});
			const fileData = await response.json();
			console.log(fileData);
		};
	}

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
						onChange={(event) => setGroupName(event.target.value)}
						value={groupName}
						type='text'
						placeholder='שם הקבוצה החדשה'
					/>
				</div>
				<div className='upload-contact-from-header'>
					<span>העלאת אנשי קשר מתוך:</span>
				</div>

				<div className='upload-container'>
					<div onClick={() => setUploadFile("xlsx")} className='xlsx-icon-container'>
						<div>
							<ExcelIcon />
						</div>
					</div>
					<div
						onClick={() => setUploadFile("phone")}
						className='phone-icon-container'
					>
						<div>
							<PhoneIcon />
						</div>
					</div>
				</div>
				{uploadFileWith === "xlsx"
					? uploadXlsxFormat(setOpenPickFields, checkFields, handleInputs)
					: null}
				{openPickFields && (
					<PickFields
						checkFields={checkFields}
						setOpenPickFields={setOpenPickFields}
						setCheckFields={setCheckFields}
					/>
				)}
			</main>
			<input
				onChange={(event) => uploadExcelFile(event.target.files[0])}
				type='file'
				accept='.xlsx, .xls, .excel, .svc'
				style={{ display: "none" }}
				name='input-file'
				id='input-file'
			/>
			<label className='upload-xlsx-input-file' htmlFor='input-file'>
				העלאת קובץ
			</label>
		</section>
	);
}

export default AddGroup;
