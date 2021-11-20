import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.component";
import Home from "./components/home/Home.component";
import GroupsList from "./components/groups-list/groups-list.component";
import ContactsList from "./components/contacts-list/contacts-list.component";
import { Route } from "react-router-dom";
import AddGroup from "./components/add-group/AddGroup.component";
import MessagesStock from "./components/messages-stock/messages-stock.component";
import SendMessagePart2 from "./components/send-message-part-2/send-message-part-2.component";
import React from "react";
import SendMessagePart1 from "./components/send-message-part-1/send-message-part-1.component";
import SendMessagePart3 from "./components/send-message-part-3/send-message-part-3.component";
import HistoryList from "./components/history-list/history-list.component";
import LoginPage from "./components/login-page/login-page.component";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UserProfile from "./components/user-profile/user-profile.component";
function App() {
	const userId = useSelector((state) => state.userReducer.userId);
	console.log(userId);
	return (
		<div className="App">
			<div id="background"></div>
			{userId && <div className="sidebar"></div>}
			{userId && <Sidebar />}
			{!userId && <Redirect to="/Login" />}
			{userId && <Redirect to="/Home" />}
			<Route
				exact
				path="/Login"
				render={() => {
					return <LoginPage />;
				}}
			/>

			<Route
				exact
				path="/Home"
				render={() => {
					return <Home />;
				}}
			/>
			<Route
				exact
				path="/Groups"
				render={() => {
					return <GroupsList />;
				}}
			/>

			<Route
				exact
				path="/Contacts"
				render={() => {
					return <ContactsList />;
				}}
			/>

			<Route
				exact
				path="/AddGroup"
				render={() => {
					return <AddGroup />;
				}}
			/>
			<Route
				exact
				path="/MessagesStock"
				render={() => {
					return <MessagesStock />;
				}}
			/>

			<Route
				exact
				path="/SendMessagePart2"
				render={() => {
					return <SendMessagePart2 />;
				}}
			/>

			<Route
				exact
				path="/SendMessagePart1"
				render={() => {
					return <SendMessagePart1 />;
				}}
			/>
			<Route
				exact
				path="/SendMessagePart3"
				render={() => {
					return <SendMessagePart3 />;
				}}
			/>
			<Route
				exact
				path="/HistoryList"
				render={() => {
					return <HistoryList />;
				}}
			/>
			<Route
				exact
				path="/UserProfile"
				render={() => {
					return <UserProfile />;
				}}
			/>
		</div>
	);
}

export default App;
