import React from "react";
import Spotify from "../../util/Spotify";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";
import Login from "../Login/Login";

Spotify.checkAccessToken();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "John Doe",
      searchResults: [],
      playlistName: "Name your playlist",
      playlistTracks: [],
      loggedIn: false
    };
    //Binding methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }
  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  addTrack(track) {
    if (
      !this.state.playlistTracks.find(
        playlistTrack => playlistTrack.id === track.id
      )
    ) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  }

  removeTrack(removedTrack) {
    let index = this.state.playlistTracks.indexOf(removedTrack);
    this.setState(() => ({
      playlistTracks: this.state.playlistTracks.filter((_, i) => i !== index)
    }));
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(
      playlistTrack => playlistTrack.uri
    );
    Spotify.savePlaylist(this.state.playlistName, trackUris);
    this.setState({
      searchResults: []
    });
    this.updatePlaylistName("My playlist");
  }

  search(term) {
    Spotify.search(term).then(searchResults =>
      this.setState({
        searchResults: searchResults
      })
    );
  }
  handleClick() {
    if (Spotify.loggedIn !== true) {
      Spotify.getAccessToken();
    } else {
      Spotify.getLoggedOut();
    }
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <Login
            handleClick={this.handleClick}
            userName={this.state.userName}
          />
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              name={this.state.playlistName}
              tracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
