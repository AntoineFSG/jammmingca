const clientId = "25186fdc28194408a0165e48a92f065c";
const redirectUri = "http://localhost:3000/";
const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&scope=user-read-email&client_id=${clientId}&redirect_uri=${redirectUri}`;
let accessToken;
let expiresIn;
const Spotify = {
  loggedIn: true,
  tokenRegex: new RegExp("access_token"),
  userName: undefined,
  checkAccessToken() {
    //if the URL contain access_token we are considered logged in
    if (window.location.href.match(Spotify.tokenRegex) !== null) {
      Spotify.loggedIn = true;
    } else {
      Spotify.loggedIn = false;
    }
    //Searching for an access_token into the current URL if it has not been already defined
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    //if accessToken has not yet been found
    if (accessToken === undefined) {
      //but only if the URL contains it
      if (urlAccessToken && urlExpiresIn) {
        //defining token and expiration time
        accessToken = urlAccessToken[1];
        expiresIn = urlExpiresIn[1];
        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
        window.history.pushState("Access Token", null, "/");
        return accessToken;
      }
    } //else means we have defined an access token through getAccessToken
    else {
      return accessToken;
    }
  },

  getAccessToken() {
    //If check AccesToken
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (accessToken === undefined) {
      if (urlAccessToken && urlExpiresIn) {
        accessToken = urlAccessToken[1];
        expiresIn = urlExpiresIn[1];
        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
        window.history.pushState("Access Token", null, "/");
        return accessToken;
      } else {
        window.location = spotifyUrl;
      }
    } else {
      return accessToken;
    }
  }, // End of getAccessToken
  getLoggedOut() {
    Spotify.loggedIn = false;
    accessToken = undefined;
    expiresIn = undefined;
    window.location.assign("https://accounts.spotify.com/logout");
  },
  async getUserName() {
    console.log("get user name fires");
    const userUrl = "https://api.spotify.com/v1/me";
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    let userName = undefined;
    userName = await fetch(userUrl, {
      headers: headers
    })
      .then(response => response.json())
      .then(jsonResponse => (userName = jsonResponse.display_name))
      .then(() => {
        console.log("userName " + userName);

        return (Spotify.userName = userName);
      });
  },
  search(term) {
    const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${term.replace(
      " ",
      "%20"
    )}`;
    return fetch(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(jsonResponse => {
        if (!jsonResponse.tracks) return [];
        return jsonResponse.tracks.items.map(track => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          };
        });
      });
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris || trackUris.length === 0) return;
    const userUrl = "https://api.spotify.com/v1/me";
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    let userId = undefined;
    let playlistId = undefined;
    fetch(userUrl, {
      headers: headers
    })
      .then(response => response.json())
      .then(jsonResponse => (userId = jsonResponse.id))
      .then(() => {
        console.log("userID " + userId);
        const createPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
        fetch(createPlaylistUrl, {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            name: name
          })
        })
          .then(response => response.json())
          .then(jsonResponse => (playlistId = jsonResponse.id))
          .then(() => {
            const addPlaylistTracksUrl = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;
            fetch(addPlaylistTracksUrl, {
              method: "POST",
              headers: headers,
              body: JSON.stringify({
                uris: trackUris
              })
            });
          });
      });
  }
};

export default Spotify;
