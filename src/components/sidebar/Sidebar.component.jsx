import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import HomePurpleIcon from "../../icons/icons-components/home-page-icon/home-page-icon.component";
import MessagesStockIcon from "../../icons/icons-components/messages-strock-icon/messages-stock-icon.component";
import GroupsIcon from "../../icons/icons-components/groups-icon/groups-icon.component";
import SendIcon from "../../icons/icons-components/send-icon/send-icon.component";
import SettingsIcon from "../../icons/icons-components/settings-icon/settings-icon.component";
import SignOutIcon from "../../icons/icons-components/sign-out-icon/sign-out-icon.component";
import ProfileIcone from "../../icons/icons-components/profile-icon/profile-icon.component";
import HistoryIcon from "../../icons/icons-components/history-icon/history-icon.component";
import "./sidebar.styles.css";
import smalltalk from "smalltalk";
import { useDispatch } from "react-redux";
import { addUserId } from "../index.redux/actions/actions";
import { style } from "@mui/system";

const links = [
	{ linkName: "בית", goTo: "/Home", className: "list list-1" },
	{ linkName: "הודעות", goTo: "/MessagesStock", className: "list list-2" },
	{ linkName: "קבוצות", goTo: "/Groups", className: "list list-3" },
	{ linkName: "שליחה", goTo: "/SendMessagePart1", className: "list list-4" },
	{ linkName: "היסטוריה", goTo: "/HistoryList", className: "list list-5" },
	{ linkName: "פרופיל", goTo: "/UserProfile", className: "list list-6" },
	{ linkName: "התנתקות", goTo: "/SignOut", className: "list list-7" },
];

function Sidebar() {
	const [path, setPath] = useState("");
	const dispatch = useDispatch();
	useEffect(() => {
		if (window.location.pathname === "/Home") {
			setPath("/Home");
		}
	}, []);

	return (
		<aside className="aside-bar">
			<Link onClick={() => setPath(links[0].goTo)} to={links[0].goTo}>
				<li className={links[0].className}>
					<HomePurpleIcon path={path} />
					{links[0].linkName}
				</li>
			</Link>
			<Link onClick={() => setPath(links[1].goTo)} to={links[1].goTo}>
				<li className={links[1].className}>
					<MessagesStockIcon path={path} />
					{links[1].linkName}
				</li>
			</Link>
			<Link onClick={() => setPath(links[2].goTo)} to={links[2].goTo}>
				<li className={links[2].className}>
					<GroupsIcon path={path} />
					{links[2].linkName}
				</li>
			</Link>
			<Link onClick={() => setPath(links[3].goTo)} to={links[3].goTo}>
				<li className={links[3].className}>
					<SendIcon path={path} />
					{links[3].linkName}
				</li>
			</Link>
			<Link onClick={() => setPath(links[4].goTo)} to={links[4].goTo}>
				<li className={links[4].className}>
					<HistoryIcon path={path} />
					{links[4].linkName}
				</li>
			</Link>
			<Link onClick={() => setPath(links[5].goTo)} to={links[5].goTo}>
				<li className={links[5].className}>
					<ProfileIcone path={path} />
					{links[5].linkName}
				</li>
			</Link>
			<div
				onClick={() =>
					smalltalk
						.confirm("", "אתה בטוח שברצונך להתנתק?")
						.then(() => dispatch(addUserId("")))
						.catch(() => {
							return;
						})
				}
			>
				<li className={links[6].className}>
					<SignOutIcon path={path} />
					{links[6].linkName}
				</li>
			</div>
		</aside>
	);
}

export default Sidebar;
