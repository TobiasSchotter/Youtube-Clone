import React from "react";
import SidebarRow from "./SidebarRow";
import "../Styles/Sidebar.css";
//Icons
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home"></SidebarRow>
      <SidebarRow Icon={WhatshotIcon} title="Trending"></SidebarRow>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscripton"></SidebarRow>
      <hr></hr>
      <SidebarRow Icon={VideoLibraryIcon} title="Libary"></SidebarRow>
      <SidebarRow Icon={HistoryIcon} title="History"></SidebarRow>
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos"></SidebarRow>
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later"></SidebarRow>
      <SidebarRow
        Icon={ThumbUpAltOutlinedIcon}
        title="Liked videos"
      ></SidebarRow>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"></SidebarRow>
      <hr></hr>
    </div>
  );
}

export default Sidebar;
