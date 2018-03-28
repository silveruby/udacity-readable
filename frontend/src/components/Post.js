import React, { Component } from 'react'
import Comments from './Comments'

class Post extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="post-view">
        <div className="post">
          <h4>timestamp</h4>
          <h2>title</h2>
          <h4>author</h4>
          <p>body</p>
          <h4>category</h4>
        </div>
        <div className="post-votes">votes</div>
        <Comments />
      </div>
    );
  }
}

export default Post;
