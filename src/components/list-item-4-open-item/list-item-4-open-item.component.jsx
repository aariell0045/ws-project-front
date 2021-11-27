import "./list-item-4-open-item.styls.css";
import React, { useState } from "react";
import ArrowDownIcon from "../../icons/icons-components/arrow-down-icon/arrow-down-icon.component";

function ListItem4(props) {
	const [open, setOpen] = useState(false);
	let [massageName, groupName, date] = props.item;

	return (
		<div
			style={{ height: open ? "fit-content" : "6.5vh" }}
			onClick={(event) => {
				event.stopPropagation();
				setOpen(!open);
			}}
			className="history-page-list-item-wrapper"
		>
			<div className="history-page-list-item">
				<div className="history-page-list-first-item history-page-list-content-item-warpper">
					<p className="history-page-content-message-name">{massageName}</p>
				</div>
				<div className="history-page-list-second-item history-page-list-content-item-warpper ">
					<p className="history-page-content">{groupName}</p>
				</div>
				<div className="history-page-list-third-item history-page-list-content-item-warpper ">
					<p className="history-page-content">{date}</p>
				</div>
				<div className="history-page-list-four-item history-page-list-content-item-warpper ">
					<p className="history-page-content">{`${props.history.currentPoint}-${props.history.startPoint + 1}`}</p>
				</div>

				<span className="history-page-list-open-item-icon">
					<ArrowDownIcon />
				</span>
			</div>

			{open && (
				<div className="history-content">
					<p>{props.history.contentMessage.map((message) => message.contentField)}</p>
				</div>
			)}
		</div>
	);
}

export default ListItem4;
