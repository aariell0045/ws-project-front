import "./login-page.styls.css";
import React from "react";
import logo from "../../icons/regular-icons-src/WeSend.svg";
import OrangeLineLogo from "../../icons/regular-icons-src/Vector 169.svg";

function LoginPage() {
  return (
    <section id="login-page">
      <div className="login-page-container">
        <div className="login-page-logo-container">
          <header className="login-page-logo">
            <img className='login-page-wesend-logo' src={logo} alt="" />
            <img className='login-page-orangeline-logo' src={OrangeLineLogo} alt="" />
          </header>
        </div>
        <div className="login-page-user-name-container">
          <div className="login-page-user-name">
            שם משתמש:
            <input
              className="login-page-user-name-box"
              type="text"
              placeholder="ישראל ישראלי"
            />
          </div>
        </div>
        <div className="login-page-password-container">
          <div className="login-page-password">
            סיסמא:
            <input
              className="login-page-password-box"
              type="text"
              placeholder="ישראל ישראלי"
            />
          </div>
        </div>
        <div className="login-page-forgot-password-container">
          <div className="login-page-forgot-password">שכחתי סיסמא</div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
