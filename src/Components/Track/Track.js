import React from "react";
import "../css/Track.css";

class Track extends React.Component {
  renderAction() {
    if (this.isRemoval === true) {
      return <button>-</button>;
    } else {
      return <button>+</button>;
    }
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>
            {this.props.artist} | {this.props.album}{" "}
          </p>
        </div>
        <button className="Track-action">{this.renderAction()}</button>
      </div>
    );
  }
}

export default Track;
