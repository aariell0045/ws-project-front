import zIndex from "@material-ui/core/styles/zIndex";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchContactsList } from "../index.redux/actions/actions";
import ListItems from "../list-items1/list-items.1component";
import "./groups-list.styles.css";
import { Redirect } from "react-router";

function mergeGroups(groupName, groups) {
	let newGroup = { groupName, contactsList: [] };
	for (let group of groups) {
		newGroup.contactsList.push(...group.contactsList);
	}
	newGroup.contactsList = checkDuplicate(newGroup.contactsList);
	newGroup.groupLength = newGroup.contactsList.length;
	return newGroup;
}

function checkDuplicate(contactsList) {
	let newObjectContactsList = {};
	let newArrayContactsList = [];

	for (let contact of contactsList) {
		let phone = contact.contactPhone;
		newObjectContactsList[phone] = contact;
	}
	for (let key in newObjectContactsList) {
		newArrayContactsList.push(newObjectContactsList[key]);
	}
	return newArrayContactsList;
}

function GroupsList() {
	const [groupsList, setGroupsList] = useState([]);
	const [state, setState] = useState({
		searchGroups: "",
	});

	const dispatch = useDispatch();
	const userId = useSelector((state) => state.userReducer.userId);
	useEffect(async () => {
		const response = await fetch(`http://localhost:8080/groups/${userId}`);
		const groups = await response.json();
		setGroupsList(groups);
	}, []);

	function handleInputs({ target }) {
		const { name, value } = target;
		let currentState = { ...state };
		currentState[name] = value;
		setState(currentState);
	}

	function deleteItem(event, id, container, setContainer) {
		fetch("http://localhost:8080/group", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId,
				groupId: id,
			}),
		});
		setContainer(container.filter((item) => item._id != id));
	}

	function fetchCurrentContactList(groupOfContacts) {
		dispatch(fetchContactsList(groupOfContacts));
	}

	return (
		<section id='groups-page'>
			<header className='groups-page-main-header'>
				<div className='groups-page-main-header-right-side'>
					<div className='groups-page-main-header-title-container'>
						<p className='groups-page-main-header-title'>כל הקבוצות שלי</p>
					</div>
				</div>

				<div className='groups-page-main-header-left-side'>
					<div className='groups-page-main-header-search-container'>
						<input
							name='searchGroups'
							className='groups-page-main-header-search'
							type='text'
							placeholder='חיפוש משתתפים או קבוצות'
							onChange={(event) => handleInputs(event)}
						/>
					</div>
					<div className='groups-page-main-header-merge-groups-button-container'>
						<button className='groups-page-main-header-merge-groups-button'>
							איחוד קבוצות
						</button>
					</div>
					<div className='groups-page-main-header-add-new-group-button-container'>
						<Link to='/AddGroup'>
							<button className='groups-page-main-header-add-new-group-button'>
								icon
							</button>
						</Link>
					</div>
				</div>
			</header>

			<div className='groups-page-groups-container-header'>
				<div className='groups-page-groups-container-header-first-column'>
					<p>שם הקבוצה</p>
				</div>
				<div className='groups-page-groups-container-header-second-column'>
					<p>כמות משתתפים</p>
				</div>
				<div className='groups-page-groups-container-header-third-column'>
					<p>תאריך יצירה</p>
				</div>
			</div>
			<div className='groups-page-groups-list'>
				{state.searchGroups &&
					groupsList.map((group, index) => {
						if (group.groupName.includes(state.searchGroups)) {
							return (
								<Link to='/Contacts' style={{ width: "100%" }}>
									<ListItems
										id={group._id}
										onClickEvent={deleteItem}
										onClickEventParams={[groupsList, setGroupsList]}
										openItem={fetchCurrentContactList}
										key={index}
										item={[
											group.groupName,
											group.amount,
											group.productionDate,
											group,
										]}
									/>
								</Link>
							);
						} else {
							return null;
						}
					})}
				{!state.searchGroups &&
					groupsList.map((group, index) => {
						console.log(group);
						return (
							<Link to="/Contacts" style={{ width: "100%" }}>
								<ListItems
									id={group._id}
									onClickEvent={deleteItem}
									onClickEventParams={[groupsList, setGroupsList]}
									openItem={fetchCurrentContactList}
									key={index}
									item={[
										group.groupName,
										group.amount,
										group.productionDate,
										group,
									]}
								/>
							</Link>
						);
					})}
			</div>
		</section>
	);
}

export default GroupsList;
