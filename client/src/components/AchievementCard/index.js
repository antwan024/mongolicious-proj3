import React from "react";
import "./styles.css";

const AchievementCard = ({ children }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
