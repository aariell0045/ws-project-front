import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./sidebar.styles.css";

const links = [
	{ linkName: "WeSend", goTo: "", className: "logo" },
	{ linkName: "החשבון שלי", goTo: "", className: "list list-1" },
	{ linkName: "בית", goTo: "/Home", className: "list list-2" },
	{ linkName: "קבוצות", goTo: "/Groups", className: "list list-3" },
	{ linkName: "מאגר הודעות", goTo: "/MessagesStock", className: "list list-4" },
	{ linkName: "שליחת הודעה", goTo: "/SendMessagePart1", className: "list list-5" },
	{ linkName: "היסטוריה", goTo: "", className: "list list-6" },
	{ linkName: "הגדרות", goTo: "", className: "list list-7" },
	{ linkName: "התנתקות", goTo: "", className: "list list-8" },
];

function Sidebar() {
	return (
		<aside className='aside-bar'>
			{links.map((link, i) => {
				return (
					<Link to={link.goTo} key={i} >
						<li className={link.className} >{ link.linkName }</li>
					</Link>
				)
			})}
		</aside>
	)
}

export default Sidebar