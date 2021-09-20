import "./list-items1.styls.css";
import React, { useState } from "react";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import ArrowDownIcon from "../../icons/icons-components/arrow-down-icon/arrow-down-icon.component";
import { Link } from "@material-ui/core";
import { Redirect } from "react-router";

function ListItems(props) {
	let [firstCoulmn, secondCoulmn, thirdCoulmn, dataItem] = props.item;
	const [state, setState] = useState({ disabled: false });
	const [contactProfile, setContactProfile] = useState({});
	console.log(contactProfile);
	return (
		<div
			onClick={() => {
				console.log(dataItem);
				props.openItem(dataItem, setContactProfile);
			}}
			className='list-items-box'
		>
			<div className='list-items-details-container'>
				<div className='list-items-first-row'>{firstCoulmn}</div>
				<div className='list-items-second-row'>{secondCoulmn}</div>
				<div className='list-items-third-row'>{thirdCoulmn}</div>
			</div>
			<div className='list-items-icons'>
				<span className='list-items-display-icon'>
					<ArrowDownIcon />
				</span>

				<div
					style={{ width: "3vw", zIndex: 1 }}
					id={props.id}
					onClick={(event) => {
						return props.onClickEvent
							? props.onClickEvent(
									event,
									props.id,
									...props.onClickEventParams
							  )
							: null;
					}}
					onMouseLeave={() => setState({ ...state, disabled: false })}
					onMouseEnter={() => setState({ ...state, disabled: true })}
					title='delete'
					className='list-items-trash-icon'
				>
					<TrashIcon disabled={state.disabled} />
				</div>
			</div>
		</div>
	);
}

export default ListItems;
