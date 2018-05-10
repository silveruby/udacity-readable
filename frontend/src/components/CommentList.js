import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Comment from './Comment'

class CommentList extends Component {

  render() {
    const post = this.props.post
    const comments =  this.props.comments

    return (
      <div className="post-comments">
        <h2>
          <span>Comments </span>
          <button>Add a comment</button>
        </h2>
        <div className="comments">
          <ul>
          { comments.map(comment => <Comment comment={comment} post={post} /> ) }
          </ul>

        </div>
      </div>
    )
  }
}

export default CommentList
