import React from "react";
import "./topmenu.css";
function topmenu() {
  return (
    <div className="topMenu">
      <div className="topLeft">Left</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">공부</li>
          <li className="topListItem">포트폴리오</li>
          <li className="topListItem">게시판</li>
        </ul>
      </div>
      <div className="topRight">Right</div>
    </div>
  );
}

export default topmenu;
