import React, { Component } from "react";
import Post from "../../Component/Post/Post.js";
import Axios from "axios";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    loading: true,
    loadedPostId: null,
  };

  componentDidUpdate() {
    if (
      this.state.loading ||
      (!this.state.loading && this.state.loadedPostId !== this.props.userId)
    ) {
      Axios.get(
        "https://jsonplaceholder.typicode.com/posts?userId=" + this.props.userId
      ).then((response) => {
        this.setState({
          posts: response.data,
          loading: false,
          loadedPostId: this.props.userId,
        });
      });
    }
  }

  render() {
    let posts = <p>Please select user to view their posts!</p>;
    let heading = "";
    if (this.props.id) {
      posts = <p>Loading</p>;
    }
    if (this.state.posts.length !== 0) {
      posts = (
        <div>
          {this.state.posts.map((post) => {
            return <Post key={post.id} title={post.title} body={post.body} />;
          })}
        </div>
      );
    }

    if (this.props.userId)
      heading = <p>These are the posts of user - {this.props.userId}</p>;
    return (
      <div className="posts">
        <b>{heading}</b>
        {posts}
      </div>
    );
  }
}

export default Posts;
