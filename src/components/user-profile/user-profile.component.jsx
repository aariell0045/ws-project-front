import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function UserProfile() {
  const [statusMessages, setStatusMessages] = useState(0);
  const userId = useSelector((state) => state.userReducer.userId);

  useEffect(async () => {
    const response = await fetch(
      `${process.env.React_App_HEROKU_SERVER_URL}/messages-status/${userId}`
    );
    const status = await response.json();
    setStatusMessages(+status);
  });

  return (
    <div className="user-profile-page">
      <header>
        <h1 style={{ fontWeight: "lighter", color: "white" }}>
          יש ברשותך: <span>{statusMessages} </span>הודעות לשימוש
        </h1>
      </header>
    </div>
  );
}

export default UserProfile;
