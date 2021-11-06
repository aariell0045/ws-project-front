import React, { useEffect, useState } from "react";
import "./add-group.styles.css";
import { Link } from "react-router-dom";
import PickFields from "../pick-fields/pick-fields.component";
import ExcelIcon from "../../icons/icons-components/excel-icon/excel-icon.component";
import PhoneIcon from "../../icons/icons-components/phone-icon/phone-icon.component";
import { getByPlaceholderText } from "@testing-library/dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CsvIcon from "../../icons/regular-icons-src/csv.svg";
const { ipcRenderer } = window.require("electron");


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

function uploadXlsxFormat(setOpenPickFields, checkFields, handleInputs) {
  return (
    <section id="xlsx-upload-format">
      <div className="xlsx-upload-format-header">
        <span>הגדרת עמודות:</span>
      </div>
      <div className="process-explantion">
        <span>
          אנא רשמו את העמודה הרלוונטית מתוך הקובץ בהתאמה לכל קטגוריה (לדוגמא: A){" "}
        </span>
      </div>
      <div className="selects-container">
        <div classNames="xlsx-upload-format-input-warpper">
          <div className="xlsx-upload-format-input-box">
            <input
              onChange={(event) => handleInputs(event)}
              name="phoneNumber"
              maxLength="1"
              type="text"
            />
          </div>
          <div className="xlsx-upload-format-input-header">פלאפון</div>
        </div>
        {checkFields.firstname && (
          <div classNames="xlsx-upload-format-input-warpper">
            <div className="xlsx-upload-format-input-box">
              <input
                onChange={(event) => handleInputs(event)}
                name="firstname"
                maxLength="1"
                type="text"
              />
            </div>
            <div className="xlsx-upload-format-input-header">שם פרטי</div>
          </div>
        )}
        {checkFields.lastname && (
          <div classNames="xlsx-upload-format-input-warpper">
            <div className="xlsx-upload-format-input-box">
              <input
                onChange={(event) => handleInputs(event)}
                name="lastname"
                maxLength="1"
                type="text"
              />
            </div>
            <div className="xlsx-upload-format-input-header">שם משפחה</div>
          </div>
        )}
        {checkFields.emial && (
          <div classNames="xlsx-upload-format-input-warpper">
            <div className="xlsx-upload-format-input-box">
              <input
                onChange={(event) => handleInputs(event)}
                name="emial"
                maxLength="1"
                type="text"
              />
            </div>
            <div className="xlsx-upload-format-input-header">אמייל</div>
          </div>
        )}
        {checkFields.gender && (
          <div classNames="xlsx-upload-format-input-warpper">
            <div className="xlsx-upload-format-input-box">
              <input
                onChange={(event) => handleInputs(event)}
                name="gender"
                maxLength="1"
                type="text"
              />
            </div>
            <div className="xlsx-upload-format-input-header">מגדר</div>
          </div>
        )}
        {checkFields.age && (
          <div classNames="xlsx-upload-format-input-warpper">
            <div className="xlsx-upload-format-input-box">
              <input
                onChange={(event) => handleInputs(event)}
                name="age"
                maxLength="1"
                type="text"
              />
            </div>
            <div className="xlsx-upload-format-input-header">גיל</div>
          </div>
        )}
        {checkFields.birthday && (
          <div classNames="xlsx-upload-format-input-warpper">
            <div className="xlsx-upload-format-input-box">
              <input
                onChange={(event) => handleInputs(event)}
                name="birthday"
                maxLength="1"
                type="text"
              />
            </div>
            <div className="xlsx-upload-format-input-header">תאריך לידה</div>
          </div>
        )}
        <button
          className="xlsx-upload-format-button-columns"
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
          >
            <div>
              <ExcelIcon />
            </div>
          </div>
          <div
            onClick={() => setUploadFile("phone")}
            className="phone-icon-container"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img className="icon-image-csv" src={CsvIcon} alt="" />
            </div>
          </div>
          <div className="selector">
            <BasicSelect
              filterGender={filterGender}
              setFilterGender={setFilterGender}
            />
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
      <label
        onClick={(event) => sendFileDataToElectron(event)}
        className="upload-xlsx-input-file"
      >
        Click
      </label>
      <div></div>
    </section>
  );
}

export default AddGroup;
