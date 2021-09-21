import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddSingleField from "../add-single-field/add-single-field.component";
import { fetchContactsList } from "../index.redux/actions/actions";
import ListItems from "../list-items1/list-items.1component";
import "./groups-list.styles.css";

// function mergeGroups(groupName, groups) {
// 	let newGroup = { groupName, contactsList: [] };
// 	for (let group of groups) {
// 		newGroup.contactsList.push(...group.contactsList);
// 	}
// 	newGroup.contactsList = checkDuplicate(newGroup.contactsList);
// 	newGroup.groupLength = newGroup.contactsList.length;
// 	return newGroup;
// }

// function checkDuplicate(contactsList) {
// 	let newObjectContactsList = {};
// 	let newArrayContactsList = [];

// 	for (let contact of contactsList) {
// 		let phone = contact.contactPhone;
// 		newObjectContactsList[phone] = contact;
// 	}
// 	for (let key in newObjectContactsList) {
// 		newArrayContactsList.push(newObjectContactsList[key]);
// 	}
// 	return newArrayContactsList;
// }

function GroupsList() {
	const [groupsList, setGroupsList] = useState([]);
	const [currentGroupName, setCurrentGroupName] = useState(null);
	const [state, setState] = useState({
		searchGroups: "",
		isCombineGroups: false,
	});

	const [openSingleField, setOpenSingleField] = useState(false);

	console.log(openSingleField);
	console.log(currentGroupName);

	function checkedCounter() {
		let checkedCounter = 0;
		for (let group of groupsList) {
			if (group.checked) {
				checkedCounter++;
			}
		}
		return checkedCounter;
	}

	function returnCurrentGroups(whichGroup) {
		let groups = [];
		for (let group of groupsList) {
			if (group.checked) {
				groups.push(group);
			}
		}

		if (whichGroup === "groupA") {
			console.log("groups[0]:", groups[0]);
			return groups[0];
		}
		if (whichGroup === "groupB") {
			console.log("groups[1]:", groups[1]);
			return groups[1];
		}
	}

	const dispatch = useDispatch();
	const userId = useSelector((state) => state.userReducer.userId);
	useEffect(async () => {
		const response = await fetch(`http://localhost:8080/groups/${userId}`);
		const groups = await response.json();
		const newGroups = groups.map((group) => {
			return { ...group, checked: false };
		});
		setGroupsList(newGroups);
	}, []);

	useEffect(async () => {
		if (currentGroupName) {
			const response = await fetch("http://localhost:8080/combine-groups", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					userId: userId,
					groupName: currentGroupName.groupName,
					groupA: returnCurrentGroups("groupA"),
					groupB: returnCurrentGroups("groupB"),
				}),
			});

			const data = await response.json();
			setGroupsList(data.groups);
		}

		setCurrentGroupName(null);

		setState({
			...state,
			isCombineGroups: false,
		});
		console.log("rerender");
	}, [currentGroupName]);

	function handleInputs({ target }) {
		const { name, value } = target;
		let currentState = { ...state };
		currentState[name] = value;
		setState(currentState);
	}

	function deleteItem(id, container, setContainer) {
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
						<button
							disabled={
								!state.isCombineGroups || 2 === checkedCounter()
									? false
									: true
							}
							onClick={() => {
								if (2 === checkedCounter()) {
									setOpenSingleField(true);
								} else {
									setState({
										...state,
										isCombineGroups: true,
									});
								}
							}}
							className='groups-page-main-header-merge-groups-button'
						>
							{state.isCombineGroups ? "איחוד" : "איחוד קבוצות"}
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
								<ListItems
									isCombineGroups={state.isCombineGroups}
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
							);
						} else {
							return null;
						}
					})}
				{!state.searchGroups &&
					groupsList.map((group, index) => {
						return (
							<ListItems
								isCombineGroups={state.isCombineGroups}
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
						);
					})}
			</div>
			{openSingleField && (
				<AddSingleField
					setOpenField={setOpenSingleField}
					getFieldValue={setCurrentGroupName}
					useCurrentData={[currentGroupName, setCurrentGroupName]}
					inputValueKeyName={"groupName"}
					fieldsNames={"שם הקבוצה החדשה:"}
				/>
			)}
			{state.isCombineGroups && (
				<button
					onClick={() => {
						const newGroupList = groupsList.map((group) => {
							if (group.checked) {
								group.checked = false;
							}
							return group;
						});

						setGroupsList(newGroupList);
						setState({
							...state,
							isCombineGroups: false,
						});
					}}
					className='remove-combine-groups-mode'
				>
					בטל איחוד
				</button>
			)}
		</section>
	);
}

export default GroupsList;
