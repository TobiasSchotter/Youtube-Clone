import React from "react";
import "../Styles/SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import * as data from "../data.json";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon></TuneOutlinedIcon>
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s100-c-k-c0xffffffff-no-rj-mo"
        channel="Dummy Test"
        verified
        subs="660k"
        noOfVideos={382}
        description="You can find awesome Videos about dummy stuff on this channel and improve ur dummy skills"
      ></ChannelRow>
      <hr />
      {data.videos.map((video) => (
        <VideoRow
          title={video.title}
          views={video.views}
          timestamp={video.timestamp}
          subs={video.subs}
          channel={video.channel}
          image={video.image}
          description={video.description}
          key={video.id}
        />
      ))}
    </div>
  );
}

export default SearchPage;
