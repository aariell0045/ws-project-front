import "./list-items1.styls.css";
import React, { useState } from "react";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import ArrowDownIcon from "../../icons/icons-components/arrow-down-icon/arrow-down-icon.component";
import { Redirect } from "react-router";

function ListItems(props) {
	let [firstCoulmn, secondCoulmn, thirdCoulmn, dataItem] = props.item;
	const [state, setState] = useState({
		disabled: false,
		moveToContacts: false,
	});

	let object = {
		backgroundColor: "#FFFFFF",
		boxShadow: `inset 0px 2px 4px rgba(0, 0, 0, 0.25)`,
		borderRadius: "10px",
	};
	return (
		<div
			style={dataItem.checked ? object : {}}
			onClick={() => {
				if (props.isCombineGroups) {
					let counterChecked = 0;
					for (let group of props.onClickEventParams[0]) {
						if (group.checked) {
							counterChecked++;
						}
					}

					const groupIndex = props.onClickEventParams[0].findIndex((group) => group._id == dataItem._id);
					const currentGroup = props.onClickEventParams[0][groupIndex];
					if (counterChecked < 2 || currentGroup.checked) {
						currentGroup.checked = !currentGroup.checked;
						props.onClickEventParams[0][groupIndex] = currentGroup;
						props.onClickEventParams[1]([...props.onClickEventParams[0]]);
					}
				} else {
					setState({
						...state,
						moveToContacts: true,
					});
					props.openItem(dataItem);
				}
			}}
			className={props.isCombineGroups ? "list-items-box-color-hidden" : "list-items-box"}
		>
			<div className="list-items-details-container">
				<div className="list-items-first-row">{firstCoulmn}</div>
				<div className="list-items-second-row">{secondCoulmn}</div>
				<div
					style={{
						direction: thirdCoulmn.includes("+") ? "ltr" : "rtl",
						marginRight: thirdCoulmn.includes("+") ? "-24vw" : "rtl",
						marginLeft: thirdCoulmn.includes("+") ? "16vw" : "rtl",
					}}
					className="list-items-third-row"
				>
					{thirdCoulmn}
				</div>
			</div>
			<div className="list-items-icons">
				<span className="list-items-display-icon">
					<ArrowDownIcon />
				</span>

				<div
					style={{ width: "3vw", zIndex: 1 }}
					id={props.id}
					onClick={async (event) => {
						event.stopPropagation();
						setState({
							...state,
							moveToContacts: false,
						});
						const [[...groupsList], setGroupsList] = props.onClickEventParams;
						const index = groupsList.findIndex((group) => group._id === props.id);
						if (props.onClickEvent) {
							const response = await props.onClickEvent(props.id);
							if (response.status === 200) {
								groupsList.splice(index, 1);
								setGroupsList(groupsList);
							}
						}
					}}
					onMouseLeave={() => setState({ ...state, disabled: false })}
					onMouseEnter={() => setState({ ...state, disabled: true })}
					title="delete"
					className="list-items-trash-icon"
				>
					<TrashIcon disabled={!state.disabled} />
				</div>
			</div>
			{state.moveToContacts && <Redirect to="/Contacts" />}
		</div>
	);
}

export default ListItems;
