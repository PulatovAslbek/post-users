import React, { Component } from "react";
import Axios from "axios";
import User from "../../Component/User/User";
import "./Users.css";

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({
        users: Array.from(new Set(response.data.map((post) => post.userId))),
      });
    });
  }

  render() {
    let users = <div>Loading...</div>;
    if (this.state.users.length !== 0) {
      users = (
        <div>
          {this.state.users.map((int, index) => {
            return (
              <User
                key={index}
                userId={int}
                clickedUser={(userId) => this.props.clickedUser(userId)}
              />
            );
          })}
        </div>
      );
    }
    //console.log(users);
    return <div className="users">{users}</div>;
  }
}

export default Users;
