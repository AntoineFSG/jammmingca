import React from "react";
import "../css/PlayList.css";
import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input
          name="playListName"
          value={this.props.playListName}
          onChange={this.handleNameChange}
        />
        <TrackList
          tracks={this.props.playListTracks}
          onAction={this.props.onAction}
          button="-"
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}
export default PlayList;
