import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CommentEdit extends Component {
  render() {
    const post =  this.props.post
    const comment =  this.props.comment

    return (
      <li key={comment.id}>
        <form>
          <input type="text" name="comment_body">{comment.body}</input>
          <input type="text" name="comment_author">{comment.author}</input>
          <input type="submit" value="Save" />
        </form>
      </li>
    )
  }
}

export default CommentEdit
