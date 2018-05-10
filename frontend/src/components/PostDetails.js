import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostDetails extends Component {
  render() {
    const post = this.props.post
    return (
      <div className="post-detail">
        <h4><Link to={`/${post.category}`}>{post.category}</Link></h4>
        <h2>{post.title} by {post.author}</h2>
        <p>{post.body}</p>
        <p># of comments: {post.commentCount}</p>
        <p>Current score: {post.voteScore}</p>
        <p><button>upvote</button><button>downvote</button></p>
        <p><Link to={`/${post.category}/${post.id}/edit`}>edit</Link> | <Link to={`/${post.category}/${post.id}/delete`}>delete</Link></p>
      </div>
    )
  }
}

export default PostDetails