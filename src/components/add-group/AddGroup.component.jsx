import React, { useEffect, useState } from "react";
import "./add-group.styles.css";
import { Link } from "react-router-dom";
import PickFields from "../pick-fields/pick-fields.component";
import ExcelIcon from "../../icons/icons-components/excel-icon/excel-icon.component";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

const { ipcRenderer } = window.require("electron");

function uploadVcf() {
	return (
		<div
			style={{
				maxWidth: "50%",
				margin: "5em",
			}}
		>
			<p style={{ lineHeight: "3vh", fontSize: "1.4em" }}>מצב ייצוא קבצים מהפלאפון לחץ על העלאת קובץ כדי להמשיך</p>
		</div>
	);
}

function BasicSelect(props) {
	const { filterGender, setFilterGender } = props;
	const handleChange = (event) => {
		event.stopPropagation();
		setFilterGender(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">סננן לפי מגדר</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={filterGender}
					label="Age"
					onChange={handleChange}
				>
					<MenuItem value={"without-gender"}>ללא מגדר</MenuItem>
					<MenuItem value={"male"}>זכר</MenuItem>
					<MenuItem value={"female"}>נקבה</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}

function uploadXlsxFormat(setOpenPickFields, checkFields, handleInputs, genderSelect) {
	return (
		<section id="xlsx-upload-format">
			<div className="xlsx-upload-format-header">
				<span>הגדרת עמודות:</span>
			</div>
			<div className="process-explantion">
				<span>אנא רשמו את העמודה הרלוונטית מתוך הקובץ בהתאמה לכל קטגוריה (לדוגמא: A) </span>
				{genderSelect()}
			</div>
			<div className="selects-container">
				<div className="xlsx-upload-format-input-warpper">
					<div className="xlsx-upload-format-input-box">
						<input onChange={(event) => handleInputs(event)} name="phoneNumber" maxLength="1" type="text" />
					</div>
					<div className="xlsx-upload-format-input-header">פלאפון</div>
				</div>
				{checkFields.firstname && (
					<div className="xlsx-upload-format-input-warpper">
						<div className="xlsx-upload-format-input-box">
							<input onChange={(event) => handleInputs(event)} name="firstname" maxLength="1" type="text" />
						</div>
						<div className="xlsx-upload-format-input-header">שם פרטי</div>
					</div>
				)}
				{checkFields.lastname && (
					<div className="xlsx-upload-format-input-warpper">
						<div className="xlsx-upload-format-input-box">
							<input onChange={(event) => handleInputs(event)} name="lastname" maxLength="1" type="text" />
						</div>
						<div className="xlsx-upload-format-input-header">שם משפחה</div>
					</div>
				)}
				{checkFields.emial && (
					<div className="xlsx-upload-format-input-warpper">
						<div className="xlsx-upload-format-input-box">
							<input onChange={(event) => handleInputs(event)} name="emial" maxLength="1" type="text" />
						</div>
						<div className="xlsx-upload-format-input-header">אמייל</div>
					</div>
				)}
				{checkFields.gender && (
					<div className="xlsx-upload-format-input-warpper">
						<div className="xlsx-upload-format-input-box">
							<input onChange={(event) => handleInputs(event)} name="gender" maxLength="1" type="text" />
						</div>
						<div className="xlsx-upload-format-input-header">מגדר</div>
					</div>
				)}
				{checkFields.age && (
					<div className="xlsx-upload-format-input-warpper">
						<div className="xlsx-upload-format-input-box">
							<input onChange={(event) => handleInputs(event)} name="age" maxLength="1" type="text" />
						</div>
						<div className="xlsx-upload-format-input-header">גיל</div>
					</div>
				)}
				{checkFields.birthday && (
					<div className="xlsx-upload-format-input-warpper">
						<div className="xlsx-upload-format-input-box">
							<input onChange={(event) => handleInputs(event)} name="birthday" maxLength="1" type="text" />
						</div>
						<div className="xlsx-upload-format-input-header">תאריך לידה</div>
					</div>
				)}
				<button className="xlsx-upload-format-button-columns" onClick={() => setOpenPickFields(true)}>
					בחר עמודות
				</button>
			</div>
		</section>
	);
}

function AddGroup() {
	const [uploadFileWith, setUploadFile] = useState("xlsx");
	const [groupName, setGroupName] = useState("");
	const [filterGender, setFilterGender] = React.useState("without-gender");
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
	let uploadFileData = {};

	const userId = useSelector((state) => state.userReducer.userId);

	function handleInputs(event) {
		const { name, value } = event.target;
		setFileProfile({
			...fileProfile,
			[name]: value,
		});
	}

	const genderSelect = () => {
		if (checkFields.gender) {
			return (
				<div className="selector">
					<BasicSelect filterGender={filterGender} setFilterGender={setFilterGender} />
				</div>
			);
		} else {
			return null;
		}
	};

	async function uploadVcfFile(event) {
		const reader = new FileReader();
		let tempArray = [];
		let tempObject = {};

		let tempKey = "";
		reader.readAsText(event.target.files[0], "[\u0590-\u05ff]");
		reader.onload = async (e) => {
			let vcfFile = e.target.result;
			vcfFile = vcfFile.split("\n");
			const tempArrayData = vcfFile[0].split("");
			for (let i = 0; i < tempArrayData.length; i++) {
				if (tempArrayData[i] === ":") {
					break;
				}
				tempKey += tempArrayData[i];
			}
			let index = 0;
			vcfFile.forEach((row, i) => {
				if (row.includes(tempKey) && i !== 0) {
					tempArray.push(tempObject);
					tempObject = {};
					index = 0;
				}

				tempObject[index] = row.split(":");
				index++;
			});

			const contacts = tempArray.map((obj) => {
				let contact = {
					contactProfile: {
						contactFirstName: "",
					},
					phoneNumber: "",
				};
				for (let key in obj) {
					for (let i = 0; i < obj[key].length; i++) {
						if (obj[key][i]?.trim("") === "FN") {
							contact.contactProfile.contactFirstName = obj[key][i + 1];
						}
						if (obj[key][i]?.trim("")?.includes("TEL")) {
							let phoneNumber = obj[key][i + 1].replace(/\D/g, "");

							contact.phoneNumber = phoneNumber;
						}
					}
				}

				return contact;
			});

			await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/group`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					userId: userId,
					groupName: groupName,
					excelFile: contacts,
					type: "vcf",
				}),
			});
		};
	}
	async function sendFileDataToElectron() {
		uploadFileData = {
			profile: fileProfile,
			userId: userId,
			groupName: groupName,
			filterGender: filterGender,
			excelFile: null,
		};
		ipcRenderer.send("upload:file", uploadFileData);
	}

	return (
		<section id="add-group-page">
			<div className="back-to-group">
				<Link to="/Groups">
					<span>חזרה לכל הקבוצות</span>
				</Link>
			</div>
			<main id="main-add-group-content">
				<div className="main-add-group-content-background"></div>
				<div className="main-add-group-content-header">
					<span>יצירת קבוצה חדשה</span>
				</div>
				<div className="warper-adding-name-input">
					<span className="span-explnation-for-input">שם הקבוצה: </span>
					<input
						className="input-adding-group-name"
						onChange={(event) => setGroupName(event.target.value)}
						value={groupName}
						type="text"
						placeholder="שם הקבוצה החדשה"
					/>
				</div>
				<div className="upload-contact-from-header">
					<span>העלאת אנשי קשר מתוך:</span>
				</div>

				<div className="upload-container">
					<div
						onClick={() => setUploadFile("xlsx")}
						className="xlsx-icon-container"
						style={{
							border: uploadFileWith === "xlsx" ? "1px solid black" : "",
						}}
					>
						<div>
							<ExcelIcon />
						</div>
					</div>
					<div
						onClick={() => setUploadFile("vcf")}
						className="phone-icon-container"
						style={{
							border: !(uploadFileWith === "xlsx") ? "1px solid black" : "",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
								gap: "1em",
							}}
						>
							<div style={{ fontSize: "1vw" }}>{"ייצוא קבצים מהפלאפון"}</div>
							<FontAwesomeIcon style={{ color: "rgba(92,114,222)" }} size={"3x"} icon={faIdCard} />
							<div
								style={{
									fontSize: "1.2vw",
								}}
							>
								{"VCF"}
							</div>
						</div>
					</div>
				</div>
				{uploadFileWith === "xlsx"
					? uploadXlsxFormat(setOpenPickFields, checkFields, handleInputs, genderSelect)
					: uploadVcf()}
				{openPickFields && (
					<PickFields checkFields={checkFields} setOpenPickFields={setOpenPickFields} setCheckFields={setCheckFields} />
				)}
			</main>
			<label htmlFor="upload-contacts" className="upload-xlsx-input-file">
				העלאת קובץ
			</label>
			{uploadFileWith === "vcf" ? (
				<input
					onChange={(event) => {
						if (uploadFileWith === "vcf") {
							return uploadVcfFile(event);
						}
					}}
					id="upload-contacts"
					name="upload-contacts"
					style={{ display: "none" }}
					type="file"
				/>
			) : (
				<button
					onClick={(event) => {
						if (uploadFileWith === "vcf") {
							return;
						}
						sendFileDataToElectron(event);
					}}
					id="upload-contacts"
					name="upload-contacts"
					style={{ display: "none" }}
				></button>
			)}
			<div></div>
		</section>
	);
}

export default AddGroup;
