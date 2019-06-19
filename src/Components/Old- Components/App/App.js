import React from "react";
import "../css/App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../PlayList/PlayList";
import Spotify from "../../util/Spotify";

//App
class App extends React.Component {
  constructor(props) {
    super(props);
    //binding methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.isInList = this.isInList.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
    this.loginIn = this.loginIn.bind(this);
    //state
    this.state = {
      Hits: [],
      PlayListName: "My PlayList",
      PlayListTracks: [
        {
          name: "PlayList Jean Song",
          album: "Jean Album",
          artist: "Jean Artist",
          id: "1"
        },
        {
          name: "PlayList Jean Song",
          album: "Jean Album",
          artist: "Jean Artist",
          id: "2"
        },
        {
          name: "PlayList Jean Song",
          album: "Jean Album",
          artist: "Jean Artist",
          id: "3"
        }
      ],
      SearchResults: [
        {
          name: "Jean Song",
          album: "Jean Album",
          artist: "Jean Artist",
          id: "4"
        },
        {
          name: "Jean Song",
          album: "Jean Album",
          artist: "Jean Artist",
          id: "5"
        },
        {
          name: "Jean Song",
          album: "Jean Album",
          artist: "Jean Artist",
          id: "6"
        }
      ]
    };
  }
  search(term) {
    Spotify.search(term).then(searchResults =>
      this.setState({
        searchResults: searchResults
      })
    );
  }

  addTrack(newTrack) {
    if (
      this.state.PlayListTracks.filter(track => track.id === newTrack.id)
        .length === 0
    ) {
      this.setState({
        ...this.state,
        PlayListTracks: [...this.state.PlayListTracks, newTrack]
      });
    }
  }
  isInList(track) {
    // used for displayling if search result track is already in playlist
    return (
      this.state.playlist.filter(playlistTrack => playlistTrack.id === track.id)
        .length > 0
    );
  }

  removeTrack(removedTrack) {
    let index = this.state.PlayListTracks.indexOf(removedTrack);
    this.setState(() => ({
      PlayListTracks: this.state.PlayListTracks.filter((_, i) => i !== index)
    }));
  }

  updatePlaylistName(name) {
    this.setState({
      PlayListName: name
    });
  }

  savePlayList() {
    let tracksURIs = [];
    this.state.PlayListTracks.forEach(track => {
      tracksURIs.push(track.URI);
    });
    return tracksURIs;
  }
  loginIn() {
    if (!this.state.Auth._token) {
      window.location = `${this.state.Auth.authEndpoint}?client_id=${
        this.state.Auth.clientId
      }&redirect_uri=${
        this.state.Auth.redirectUri
      }&scope=${this.state.Auth.scopes.join("%20")}&response_type=token`;
    }
  }

  render() {
    return (
      <div>
        <h1>
          {console.log(this.state.SearchResults)}
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <Spotify onClick={this.loginIn} />
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.SearchResults}
              onAction={this.addTrack}
            />
            <Playlist
              playListName={this.state.PlayListName}
              playListTracks={this.state.PlayListTracks}
              onAction={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlayList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
