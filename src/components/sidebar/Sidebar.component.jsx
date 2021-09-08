import React from "react";
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

const links = [
	{ linkName: "בית", goTo: "/Home", className: "list list-1" },
	{ linkName: "הודעות", goTo: "/MessagesStock", className: "list list-2" },
	{ linkName: "קבוצות", goTo: "/Groups", className: "list list-3" },
	{ linkName: "שליחה", goTo: "/SendMessagePart1", className: "list list-4" },
	{ linkName: "היסטוריה", goTo: "", className: "list list-5" },
	{ linkName: "פרופיל", goTo: "", className: "list list-6" },
	{ linkName: "הגדרות", goTo: "", className: "list list-7" },
	{ linkName: "התנתקות", goTo: "", className: "list list-8" },
];

const ICONS = [];

function Sidebar() {
	return (
		<aside className='aside-bar'>
			<Link to={links[0].goTo}>
				<li className={links[0].className}>
					<HomePurpleIcon />
					{links[0].linkName}
				</li>
			</Link>
			<Link to={links[1].goTo}>
				<li className={links[1].className}>
					<MessagesStockIcon />
					{links[1].linkName}
				</li>
			</Link>
			<Link to={links[2].goTo}>
				<li className={links[2].className}>
					<GroupsIcon />
					{links[2].linkName}
				</li>
			</Link>
			<Link to={links[3].goTo}>
				<li className={links[3].className}>
					<SendIcon />
					{links[3].linkName}
				</li>
			</Link>
			<Link to={links[4].goTo}>
				<li className={links[4].className}>
					<HistoryIcon />
					{links[4].linkName}
				</li>
			</Link>
			<Link to={links[5].goTo}>
				<li className={links[5].className}>
					<ProfileIcone />
					{links[5].linkName}
				</li>
			</Link>
			<Link to={links[6].goTo}>
				<li className={links[6].className}>
					<SettingsIcon />
					{links[6].linkName}
				</li>
			</Link>
			<Link to={links[7].goTo}>
				<li className={links[7].className}>
					<SignOutIcon />
					{links[7].linkName}
				</li>
			</Link>
		</aside>
	);
}

export default Sidebar;
