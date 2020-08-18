import React, { Component } from "react";
import "../css/ProfilePage.css"

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username')
    }
  }
  render() {
    return (
      <div className="profile-cont">
        <h1 className="headi">Welcome ${this.state.username}</h1>
        <p className="intero">
          Hey user this is non profitable organistation you can download torrent
          files for movies.
        </p>
      </div>
    );
  }
}

export default ProfilePage;
