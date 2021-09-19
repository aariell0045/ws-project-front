import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListItems from "../list-items1/list-items.1component";
import "./groups-list.styles.css";

// const groups = [
//   {
//     id: "1",
//     groupName: "ariel",
//     groupLength: 50,
//     productionDate: "25.09.2000",
//     contactsList: [
//       {
//         contactName: "ariel",
//         contactLastName: "cohen",
//         contactPhone: "0502203450",
//       },
//       {
//         contactName: "ariel",
//         contactLastName: "cohen",
//         contactPhone: "0512203450",
//       },
//     ],
//   },
//   {
//     id: "2",
//     groupName: "ariel",
//     groupLength: 50,
//     productionDate: "25.09.2000",
//     contactsList: [
//       {
//         contactName: "ariel",
//         contactLastName: "cohen",
//         contactPhone: "0532203450",
//       },
//       {
//         contactName: "ariel",
//         contactLastName: "cohen",
//         contactPhone: "0502203450",
//       },
//     ],
//   },
//   {
//     id: "3",
//     groupName: "ariel",
//     groupLength: 50,
//     productionDate: "25.09.2000",
//     contactsList: [
//       {
//         contactName: "ariel",
//         contactLastName: "cohen",
//         contactPhone: "0582203450",
//       },
//       {
//         contactName: "ariel",
//         contactLastName: "cohen",
//         contactPhone: "0502203450",
//       },
//     ],
//   },
// ];

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

  function deleteItem(id, container, setContainer) {
    fetch("http://localhost:8080/group",{
      method:"DELETE",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        userId,
        groupId:id
      })
    })
    setContainer(container.filter((item) => item._id != id));
  }

  return (
    <section id="groups-page">
      <header className="groups-page-main-header">
        <div className="groups-page-main-header-right-side">
          <div className="groups-page-main-header-title-container">
            <p className="groups-page-main-header-title">כל הקבוצות שלי</p>
          </div>
        </div>

        <div className="groups-page-main-header-left-side">
          <div className="groups-page-main-header-search-container">
            <input
              name="searchGroups"
              className="groups-page-main-header-search"
              type="text"
              placeholder="חיפוש משתתפים או קבוצות"
              onChange={(event) => handleInputs(event)}
            />
          </div>
          <div className="groups-page-main-header-merge-groups-button-container">
            <button className="groups-page-main-header-merge-groups-button">
              איחוד קבוצות
            </button>
          </div>
          <div className="groups-page-main-header-add-new-group-button-container">
            <Link to="/AddGroup">
              <button className="groups-page-main-header-add-new-group-button">
                icon
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="groups-page-groups-container-header">
        <div className="groups-page-groups-container-header-first-column">
          <p>שם הקבוצה</p>
        </div>
        <div className="groups-page-groups-container-header-second-column">
          <p>כמות משתתפים</p>
        </div>
        <div className="groups-page-groups-container-header-third-column">
          <p>תאריך יצירה</p>
        </div>
      </div>
      <div className="groups-page-groups-list">
        {state.searchGroups &&
          groupsList.map((group, index) => {
            if (group.groupName.includes(state.searchGroups)) {
              
              return (
                <ListItems
                  id={group.id}
                  onClickEvent={deleteItem}
                  onClickEventParams={[groupsList, setGroupsList]}
                  key={index}
                  item={[
                    group.groupName,
                    group.amount,
                    group.productionDate,
                  ]}
                />
              );
            } else {
              return null;
            }
          })}
        {!state.searchGroups &&
          groupsList.map((group, index) => {
            console.log(group);
            return (
              <ListItems
                id={group._id}
                onClickEvent={deleteItem}
                onClickEventParams={[groupsList, setGroupsList]}
                key={index}
                item={[
                  group.groupName,
                  group.amount,
                  group.productionDate,
                ]}
              />
            );
          })}
      </div>
    </section>
  );
}

export default GroupsList;
