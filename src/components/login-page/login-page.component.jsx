import "./login-page.styls.css";
import React, { useState } from "react";
import logo from "../../icons/regular-icons-src/WeSend.svg";
import OrangeLineLogo from "../../icons/regular-icons-src/Vector 169.svg";
import { Redirect } from "react-router";
import { addUserId } from "../index.redux/actions/actions";
import { useDispatch } from "react-redux";
import smalltalk from "smalltalk";

function LoginPage() {
	const [state, setState] = useState({
		userName: "",
		password: "",
		userId: null,
		result: false,
	});

	const dispatch = useDispatch();

	function handleInputs(event) {
		const { value, name } = event.target;
		setState({
			...state,
			[name]: value,
		});
	}

	return (
		<section id="login-page">
			{state.userId && state.result === true && <Redirect to="/Home" />}
			<div className="login-page-container">
				<div className="login-page-logo-container">
					<header className="login-page-logo">
						<img className="login-page-wesend-logo" src={logo} alt="" />
						<img className="login-page-orangeline-logo" src={OrangeLineLogo} alt="" />
					</header>
				</div>
				<form
					className="login-page-login-form"
					onSubmit={async (e) => {
						e.preventDefault();
						const response = await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/login`, {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								userName: state.userName,
								password: state.password,
							}),
						});
						const data = await response.json();
						if (data.result === true && data.userId) {
							dispatch(addUserId(data.userId));
							setState({
								...state,
								userId: data.userId,
								result: data.result,
							});
						} else if (data.result === "user expierd" && data.userId === null) {
							smalltalk.alert("משתמש זה יצא משימוש", "אם תרצה להחזיר את השימוש במשתמש לחץ כאן:");
						} else {
							smalltalk.alert("Error", "worng password");
						}
					}}
				>
					<div className="login-page-user-name-container">
						<div className="login-page-user-name">
							שם משתמש:
							<input
								onChange={handleInputs}
								className="login-page-user-name-box"
								type="text"
								placeholder=""
								name="userName"
							/>
						</div>
					</div>
					<div className="login-page-password-container">
						<div className="login-page-password">
							סיסמא:
							<input
								onChange={handleInputs}
								className="login-page-password-box"
								type="password"
								placeholder=""
								name="password"
							/>
						</div>
					</div>
					<div className="login-page-sign-in-button-container">
						<button type="submit" className="login-page-sign-in-button">
							התחברות
						</button>
					</div>
				</form>
				<div className="login-page-forgot-password-container">
					<div className="login-page-forgot-password">שכחתי סיסמא</div>
				</div>
			</div>
		</section>
	);
}

export default LoginPage;
