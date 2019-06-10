import React from "react";
import "../css/SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {console.log(this.props.searchResults[0].name)}
        <TrackList searchResults={this.props.searchResults} />
      </div>
    );
  }
}

export default SearchResults;
