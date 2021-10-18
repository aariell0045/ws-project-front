import "./send-message-part-3.styles.css";
import React from "react";

import { Link } from "react-router-dom";
import GoBack from "../../icons/icons-components/go-back-icon/go-back-icon.component";
import { useSelector } from "react-redux";
import DisplayPhone from "../../icons/icons-components/display-phone/display-phone.component";
const { ipcRenderer } = window.require("electron");

const elementsSelectores = {
	whatsappPage: "app",
	contentInput: "",
	sidebarInput: "",
	openMediaOptions: "span[data-icon='clip']",
	sandClock: "span[data-icon='msg-time']",
	inputFile: "input[type='file']",
	sendButton: "",
	sendButtonWidthMedia: "",
};

function SendMessagePart3() {
	const currentGroup = useSelector((state) => state.messageToSendReducer.currentGroup);
	const currentMessage = useSelector((state) => state.messageToSendReducer.currentMessage);

	return (
		<section id='send-message-part3'>
			<div className='send-message-part3-warpper last-warpper-1'>
				<header className='send-message-part3-main-header'>
					<Link to='/SendMessagePart2'>
						<span>
							<GoBack />
						</span>
					</Link>
					<p>כל הפרטים לפני ששולחים:</p>
				</header>
				<div className='content-phone-box'>
					{currentMessage.contentMessage.map((message) => {
						return (
							<div
								style={{
									width: "fit-content",
									height: "fit-content",
								}}
								id={message.id}
							>
								<img
									style={{ marginRight: "3vw" }}
									className='image-url-upload-media'
									src={message.mediaSrc}
									alt=''
								/>
								<div
									style={{ minWidth: "15vw" }}
									className='send-messages-part-1-left-side-message-field'
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

			<div className='send-message-part3-warpper'>
				<div className='send-message-part3-warpper-2'>
					<header className='send-message-part3-sub-header'>
						<p>ההודעה תשלח לקבוצות הבאות:</p>
					</header>

					<div className='send-message-part3-group-name-container'>
						{currentGroup.groupName}
					</div>
				</div>

				<header className='send-message-part3-sub-header'>
					<p>תנאי שימוש:</p>
				</header>
				<div className='send-message-part3-conditions-container'>
					<article className='send-message-part3-conditions-container-content'>
						<p>
							כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל
							יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו
							כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו
							כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו
							כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימושכל יהיו כתובים
							כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל
							תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי
							השימושכל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש
							כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל
							יהיו כתובים כל תנאי השימוש
						</p>
					</article>
					<div className='i-agree-line'>
						<input type='checkbox' />
						אני מאשר/ת שקראתי ואני מסכימ/ה לכל תנאי השימוש.
					</div>
				</div>
			</div>
			<div className='send-message-part3-warpper'>
				<div className='send-message-part-3-button-warpper'>
					<div
						onClick={() => {
							console.log("hello");
							ipcRenderer.send("start", {
								elementsSelectores,
								currentMessage,
								currentGroup,
							});
						}}
						className='send-message-part-3-button'
					>
						<div className='send-message-part-3-button-background'></div>
						לשליחה דרך
					</div>
				</div>
			</div>
		</section>
	);
}

export default SendMessagePart3;
