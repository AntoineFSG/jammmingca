import React from "react";
import Spotify from "../../util/Spotify";
import "./login.css";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Jean Pate"
    };
  }
  async componentDidMount() {
    await Spotify.getUserName();
    this.setState({
      userName: Spotify.userName
    });
    console.log(this.state.userName);
  }
  render() {
    if (Spotify.loggedIn === true) {
      return (
        <div>
          <h2 className="spotify-welcome">Welcome {this.state.userName}</h2>
          <button className="spotify-style" onClick={this.props.handleClick}>
            Log Out{" "}
            <img
              className="spotify-logo"
              src="./img/Spotify_Icon_RGB_Green.png"
            />
          </button>
        </div>
      );
    } else {
      return (
        <button className="spotify-style" onClick={this.props.handleClick}>
          Login with
          <img
            className="spotify-logo"
            src="./img/Spotify_Logo_RGB_Green.png"
          />
        </button>
      );
    }
  }
}

export default Login;
