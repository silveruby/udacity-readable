import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Posts extends Component {
  render() {
    return (
        <div className="posts-list">
          <h2>
            <span>Posts</span>
          </h2>
          <ul>
            <li><Link to="/post">post_</Link></li>
          </ul>
        </div>
    );
  }
}

export default Posts;
