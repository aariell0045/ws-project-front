import "./contacts-list.styls.css";
import React, { useEffect, useState } from "react";
import ListItems from "../list-items1/list-items.1component";
import { Link } from "react-router-dom";
import AddContactIcon from "../../icons/icons-components/add-contact-icon/add-contact.component";
import GoBack from "../../icons/icons-components/go-back-icon/go-back-icon.component";
import { useSelector } from "react-redux";

// const contacts = [
//   { id:"1",firstName: "ariel", lastName: "cohen", phoneNumber: "1502203450" },
//   { id:"2",firstName: "ariel", lastName: "cohen", phoneNumber: "0502203450" },
//   { id:"3",firstName: "toam", lastName: "fdd", phoneNumber: "0545233649" },
// ];

function ContactsList() {
	const [contactsList, setContactsList] = useState([]);
	const [state, setState] = useState({
		searchContacts: "",
	});

	function handleInputs({ target }) {
		const { name, value } = target;
		let currentState = { ...state };
		currentState[name] = value;
		setState(currentState);
	}

	function deleteItem(id, container, setContainer) {
		setContainer(container.filter((item) => item.id != id));
	}

	function viewProfileContact(profileContact, setContainer) {
		setContainer(profileContact);
	}

	const group = useSelector((state) => state.contactReducer.contactsList);
	useEffect(() => {
		setContactsList(group.contacts);
	}, []);
	return (
		<section id='contacts-page'>
			<header className='contacts-page-main-header'>
				<div className='contacts-page-main-header-right-side'>
					<Link to='/Groups'>
						<span className='contacts-page-main-header-back-button'>
							<GoBack />
						</span>
					</Link>
					<div className='contacts-page-main-header-title-container'>
						<p className='contacts-page-main-header-title'>
							<span>{group.groupName} </span>- {group.contact} משתתפים
						</p>
					</div>
				</div>
				<div className='contacts-page-main-header-left-side'>
					<div className='contacts-page-main-header-search-container'>
						<input
							name='searchContacts'
							className='contacts-page-main-header-search'
							type='text'
							placeholder='חיפוש משתתפים בקבוצה'
							onChange={(event) => handleInputs(event)}
						/>
					</div>
					<div className='contacts-page-main-header-add-new-contact-button-container'>
						<button className='contacts-page-main-header-add-new-contact-button'>
							<AddContactIcon />
						</button>
					</div>
				</div>
			</header>

			<div className='contacts-page-contacts-container-header'>
				<div className='contacts-page-contacts-container-header-first-column'>
					<p>שם פרטי</p>
				</div>
				<div className='contacts-page-contacts-container-header-second-column'>
					<p>שם משפחה</p>
				</div>
				<div className='contacts-page-contacts-container-header-third-column'>
					<p>טלפון</p>
				</div>
			</div>
			<div className='contacts-page-contacts-list'>
				{state.searchContacts &&
					contactsList.map((contact, index) => {
						const isContactName =
							contact.contactProfile.contactFirstName.includes(
								state.searchContacts
							);
						const isContactPhoneNumber =
							contact.contactProfile.contactLastName.includes(
								state.searchContacts
							);
						const isContactLastName = contact.phoneNumber.includes(
							state.searchContacts
						);
						if (isContactLastName || isContactName || isContactPhoneNumber) {
							return (
                <ListItems
								id={contact.id}
								onClickEvent={deleteItem}
								onClickEventParams={[contactsList, setContactsList]}
								key={index}
								openItem={viewProfileContact}
								item={[
									contact.contactProfile.contactFirstName,
									contact.contactProfile.contactLastName,
									contact.phoneNumber,
									contact.profileContact,
								]}
							/>
							);
						} else {
							return null;
						}
					})}
				{!state.searchContacts &&
					contactsList.map((contact, index) => {
						return (
							<ListItems
								id={contact.id}
								onClickEvent={deleteItem}
								onClickEventParams={[contactsList, setContactsList]}
								key={index}
								openItem={viewProfileContact}
								item={[
									contact.contactProfile.contactFirstName,
									contact.contactProfile.contactLastName,
									contact.phoneNumber,
									contact.contactProfile,
								]}
							/>
						);
					})}
			</div>
		</section>
	);
}

export default ContactsList;
