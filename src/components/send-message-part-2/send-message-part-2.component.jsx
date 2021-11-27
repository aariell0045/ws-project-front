import "./send-message-part-2.styls.css";
import React, { useEffect } from "react";
import ContactBox from "../contact-box/contact-box.components";
import { Link } from "react-router-dom";
import GroupBox from "../list-item-3/list-item-3.component";
import { useState } from "react";
import GoBack from "../../icons/icons-components/go-back-icon/go-back-icon.component";
import { useSelector } from "react-redux";
import { fetchCurrentGroup } from "../index.redux/actions/actions";
import { useDispatch } from "react-redux";

function SendMessagePart2() {
	const [groupsList, setGroupsList] = useState([]);
	const [state, setState] = useState({
		searchGroups: "",
	});

	const [currentGroup, setCurrentGroup] = useState({
		groupName: "",
		contacts: [],
		id: "",
	});

	const userId = useSelector((state) => state.userReducer.userId);
	const dispatch = useDispatch();

	useEffect(async () => {
		const response = await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/groups/${userId}`);
		const data = await response.json();
		setGroupsList(data);
	}, []);

	function handleInputs({ target }) {
		const { name, value } = target;
		let currentState = { ...state };
		currentState[name] = value;
		setState(currentState);
	}

	return (
		<section id="send-message-part-2">
			<div className="send-message-part-2-warpper">
				<div className="send-message-part-2-right-side">
					<header className="send-message-part-2-right-side-main-header">
						<Link to="/SendMessagePart1">
							<span>
								<GoBack />
							</span>
						</Link>
						<p>יש לבחור את הקבוצה הרלוונטית:</p>
					</header>
					<input
						name="searchGroups"
						className="send-message-part-2-right-side-search-input"
						type="text"
						placeholder="חיפוש בקבוצות שלי"
						onChange={(event) => handleInputs(event)}
					/>
					<div className="send-message-part-2-right-side-groupsList">
						{state.searchGroups &&
							groupsList.map((group, index) => {
								if (group.groupName.includes(state.searchGroups)) {
									return (
										<div
											onClick={() => {
												setCurrentGroup({ ...group });
											}}
											className="group-box"
										>
											<GroupBox key={group._id} id={group._id} groupName={group.groupName} groupAmount={group.amount} />
										</div>
									);
								} else {
									return null;
								}
							})}

						{!state.searchGroups &&
							groupsList.map((group) => {
								return (
									<div
										style={{
											backgroundColor: currentGroup._id == group._id ? "white" : "",
										}}
										onClick={() => {
											setCurrentGroup({ ...group });
										}}
										className="group-box"
									>
										<GroupBox
											key={group._id}
											id={group._id}
											currentGroup={currentGroup}
											groupName={group.groupName}
											groupAmount={group.amount}
										/>
									</div>
								);
							})}
					</div>
				</div>

				<div className="send-message-part-2-left-side">
					<div className="send-message-part-2-left-side-background"></div>
					{currentGroup && (
						<div className="send-message-part-2-left-side-container">
							<header className="send-message-part-2-left-side-main-header">
								<p>
									<span>{currentGroup.groupName}</span> - {currentGroup.amount} משתתפים{" "}
								</p>
							</header>

							<div className="contacts-table-headers">
								<div className="send-message-part2-left-side-list-header-first-column">
									<span>שם פרטי</span>
								</div>
								<div className="send-message-part2-left-side-list-header-second-column">
									<span>שם משפחה</span>
								</div>
								<div className="send-message-part2-left-side-list-header-third-column">
									<span>טלפון</span>
								</div>
							</div>
							<div className="contacts-list-container">
								{currentGroup.contacts.map((contact, index) => {
									return (
										<ContactBox
											key={contact._id}
											phoneNumber={contact.phoneNumber}
											contactProfile={contact.contactProfile}
										/>
									);
								})}
							</div>
						</div>
					)}
					<Link to={currentGroup.contacts.length ? "/SendMessagePart3" : "/SendMessagePart2"}>
						<div
							style={{ cursor: currentGroup.contacts.length && "pointer" }}
							className="send-message-part-2-left-side-button-warpper"
						>
							<div
								onClick={() => {
									dispatch(fetchCurrentGroup(currentGroup));
								}}
								className="send-message-part-2-left-side-button"
							>
								<div
									className={
										currentGroup.contacts.length
											? "send-message-part-2-left-side-button-background-ready"
											: "send-message-part-2-left-side-button-background"
									}
								></div>
								יאללה, המשכנו
							</div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default SendMessagePart2;
