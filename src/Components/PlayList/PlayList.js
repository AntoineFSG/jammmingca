import React from "react";
import "../css/PlayList.css";
import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value={"New Playlist"} />
        <TrackList SearchResults={this.props.SearchResults} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
export default PlayList;
