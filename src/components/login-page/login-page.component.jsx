import "./login-page.styls.css";
import React from "react";

function LoginPage() {
  return (
    <section id="login-page">
      <div className="login-page-container">
        <div className="login-page-user-name">שם משתמש</div>
        <div className="login-page-password">סיסמא</div>
        <div className="login-page-forgot-password">שכחתי סיסמא</div>
      </div>
    </section>
  );
}

export default LoginPage;
