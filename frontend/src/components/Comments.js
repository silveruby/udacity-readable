import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
      <div className="post-comments">
        <h2>Comments</h2>
        <a href="">Add a comment</a>
        <div className="comments">
          <ul>
            <li>
              <p>Comment 1</p>
              <a href="">Edit</a> | <a href="">Delete</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
