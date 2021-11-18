import React, { Component } from "react";
import "./App.css";
import Users from "./Users/Users.js";
import Posts from "./Posts/Posts.js";

class App extends Component {
  state = {
    clickedUserId: null,
  };
  clickedUserHandler = (userId) => {
    this.setState({ clickedUserId: userId });
  };

  render() {
    //console.log(this.clickedUserId);
    return (
      <div>
          <Users
            className=".users"
            clickedUser={(userId) => this.clickedUserHandler(userId)}
          />
          <Posts className=".posts" userId={this.state.clickedUserId} />
      </div>
    );
  }
}

export default App;
