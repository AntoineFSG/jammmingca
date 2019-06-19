import React from "react";
import "../css/SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          tracks={this.props.searchResults}
          onAction={this.props.onAction}
          button={"+"}
        />
      </div>
    );
  }
}

export default SearchResults;
