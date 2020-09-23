import React, { useState } from "react";
import "../Styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon></MenuIcon>
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
          />
        </Link>
      </div>

      <div className="search-bar">
        {/* <input
          placeholder="Search"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputButton"></SearchIcon>
        </Link> */}
        <form>
          <input
            placeholder="Search"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            type="text"
          />
          <Link to={`/search/${inputSearch}`}>
            <button className="header_buttonIcon">
              <SearchIcon></SearchIcon>
            </button>
          </Link>
        </form>
      </div>

      <div className="header_right">
        <VideoCallIcon className="header_icon"></VideoCallIcon>
        <AppsIcon className="header_icon"></AppsIcon>
        <NotificationsIcon className="header_icon"></NotificationsIcon>
        <Avatar
          className="header_icon"
          alt=""
          src="https://lh3.googleusercontent.com/a-/AOh14GgIZFbN_gtidQ5LuxKCWNjOmK316G-q0q0zBd2t=s88-c-k-c0x00ffffff-no-rj-mo"
        ></Avatar>
      </div>
    </div>
  );
}

export default Header;
