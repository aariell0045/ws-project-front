import "./send-message-part-3.styles.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../icons/icons-components/go-back-icon/go-back-icon.component";
import { useSelector } from "react-redux";
import DisplayPhone from "../../icons/icons-components/display-phone/display-phone.component";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const { ipcRenderer } = window.require("electron");

function SendMessagePart3() {
	const [starterIndex, setStarterIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(0);
	const [currentMessageFromState, setCurrentMessageFromState] = useState(null);
	const currentGroup = useSelector(
		(state) => state.messageToSendReducer.currentGroup
	);
	const currentMessage = useSelector(
		(state) => state.messageToSendReducer.currentMessage
	);
	const userId = useSelector((state) => state.userReducer.userId);
	useEffect(() => {
		setCurrentMessageFromState(currentMessage);
		setEndIndex(currentGroup.contacts.length);
		setStarterIndex(1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const elementsSelectores = {
		caps: { setPageLoadStrategy: "eager", setAlertBehavior: "accept" },
		forBrowser: "chrome",
		whatsappSideBar: "side",
		messageInput: "_13NKt",
		openMediaSpan: "span[data-icon='clip']",
		inputFile: "input[type='file']",
		sendButtonWidthMedia: "_165_h",
		sendButton: "_4sWnG",
		contactBox: "_2_TVt",
		contactMenu: "_2oldI",
		sendedToArcive: "_3ya1x",
		sandClock: "span[data-icon='msg-time']",
		userId: userId,
		starterIndex: +starterIndex <= 0 ? 0 : +starterIndex - 1,
		endIndex: +endIndex <= 0 ? 0 : +endIndex,
	};

	function uploadMedia(event, index) {
		const newMessage = { ...currentMessageFromState };
		newMessage.contentMessage[index].mediaSrc = event.target.files[0].path;
		setCurrentMessageFromState(newMessage);
	}

	function restImage(index) {
		const newMessage = { ...currentMessageFromState };
		newMessage.contentMessage[index].mediaSrc = "";
		setCurrentMessageFromState(newMessage);
	}

	return (
		<section id="send-message-part3">
			<div className="send-message-part3-warpper last-warpper-1">
				<header className="send-message-part3-main-header">
					<Link to="/SendMessagePart2">
						<span>
							<GoBack />
						</span>
					</Link>
					<p>כל הפרטים לפני ששולחים:</p>
				</header>
				<div className="content-phone-box">
					{currentMessage.contentMessage.map((message, index) => {
						return (
							<div
								key={index}
								style={{
									width: "fit-content",
									height: "fit-content",
								}}
								id={message.id}
							>
								<picture>
									{message.mediaSrc && (
										<div
											style={{
												display: "flex",
												alignItems: "center",
												gap: "1vw",
												padding: "1vw",
											}}
										>
											<FontAwesomeIcon size="2x" icon={faCheckCircle} />
											<span>התמונה עלתה בהצלחה</span>
											<span
												onClick={() => {
													restImage(index);
												}}
											>
												X
											</span>
										</div>
									)}
									{!message.mediaSrc && (
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												marginBottom: "2em",
											}}
										>
											<input
												accept=".jpg, .png, .gif, .svg, .jpeg, .mp4, .mov, .wmv, .flv, .avi, .avchd, .mkv, .webm,"
												style={{ display: "none" }}
												type="file"
												name={index + ""}
												id={index + ""}
												onChange={(event) => {
													uploadMedia(event, index);
												}}
											/>
											<label style={{ zIndex: 1 }} htmlFor={index + ""}>
												<Button style={{ zIndex: -1 }} variant="contained">
													העלאת קובץ
												</Button>
											</label>
										</div>
									)}
								</picture>

								<div
									style={{ minWidth: "15vw" }}
									className="send-messages-part-1-left-side-message-field"
								>
									<div>
										<p>{message.contentField}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div>
					<DisplayPhone />
				</div>
			</div>

			<div className="send-message-part3-warpper">
				<div className="send-message-part3-warpper-2">
					<header className="send-message-part3-sub-header">
						<p>ההודעה תשלח לקבוצות הבאות:</p>
					</header>

					<div className="send-message-part3-group-name-container">
						{currentGroup.groupName}
					</div>
				</div>

				<header className="send-message-part3-sub-header">
					<p>תנאי שימוש:</p>
				</header>
				<div className="send-message-part3-conditions-container">
					<article className="send-message-part3-conditions-container-content">
						<p>
							כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל
							יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו
							כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים
							כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל
							תנאי השימוש כל יהיו כתובים כל תנאי השימושכל יהיו כתובים כל תנאי
							השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש
							כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימושכל יהיו
							כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים
							כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל
							תנאי השימוש
						</p>
					</article>
					<div className="i-agree-line">
						<input type="checkbox" />
						אני מאשר/ת שקראתי ואני מסכימ/ה לכל תנאי השימוש.
					</div>
				</div>
				<div className="starter-index-container">
					<br />
					<p>איפה תרצה להתחיל את ההרצה</p>
					<input
						onChange={(event) => {
							setStarterIndex(event.target.value);
						}}
						placeholder=""
						defaultValue="1"
						type="number"
						name=""
						id=""
					/>
					<br />
					<p>איפה תרצה לסיים את ההרצה</p>
					<input
						onChange={(event) => {
							setEndIndex(event.target.value);
						}}
						placeholder=""
						defaultValue={`${currentGroup.contacts.length}`}
						type="number"
						name=""
						id=""
					/>
				</div>
			</div>
			<div className="send-message-part3-warpper">
				<div className="send-message-part-3-button-warpper">
					<div
						onClick={() => {
							ipcRenderer.send("start", {
								elementsSelectores,
								currentMessage: currentMessageFromState,
								currentGroup,
							});
						}}
						className="send-message-part-3-button"
					>
						<div className="send-message-part-3-button-background"></div>
						לשליחה דרך
					</div>
				</div>
			</div>
		</section>
	);
}

export default SendMessagePart3;
