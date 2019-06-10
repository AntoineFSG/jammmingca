import React from "react";
import "../css/App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../PlayList/PlayList";
import { jsxNamespacedName } from "@babel/types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [
        {
          name: "Jean Song",
          album: "Jean Album",
          artist: "Jean Artist",
          id: "id"
        },
        {
          name: "Jean Song",
          album: "Jean Album",
          artist: "Jean Artist",
          id: "id"
        },
        {
          name: "Jean Song",
          album: "Jean Album",
          artist: "Jean Artist",
          id: "id"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>
          {console.log(this.state.SearchResults)}
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.SearchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
