import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(term) {
    this.props.onSearch(term);
  }
  handleTermChange(event) {
    this.search(event.target.value);
  }

  render() {
    return (
      <div className="SearchBar">
        <h2>Search for a song</h2>
        <input onChange={this.handleTermChange} placeholder="Type..." />
      </div>
    );
  }
}

export default SearchBar;
