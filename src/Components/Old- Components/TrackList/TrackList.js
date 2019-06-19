import React from "react";
import "../css/TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return (
            <Track
              track={track}
              name={track.name}
              album={track.album}
              artist={track.artist}
              key={track.id}
              isRemoval={false}
              onAction={this.props.onAction}
            />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
