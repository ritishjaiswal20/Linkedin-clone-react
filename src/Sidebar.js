import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItems">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwxI9n6RuBC2uKvtVMgIKtWeqAtoE64Pn9g&usqp=CAU"
          alt="background-image"
        />
        <Avatar className="sidebar_avatar" />
        <h2>Ritish jaiswal</h2>
        <h4>Ritishjasiwal20@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your profile</p>
          <p className="sidebar_statNumber">23237</p>
        </div>

        <div className="sidebar_stat">
          <p>Views on your post</p>
          <p className="sidebar_statNumber">23237</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("javascript")}
        {recentItem("pogrammers")}
        {recentItem("software engeenring")}
        {recentItem("react js")}
        {recentItem("next js")}
        {recentItem("mern")}
      </div>
    </div>
  );
}

export default Sidebar;
