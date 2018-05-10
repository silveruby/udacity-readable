import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Comment extends Component {

  state = {
    isEdit: false
  }

  onEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  render() {
    const post =  this.props.post
    const comment =  this.props.comment
    console.log("state", this.state.isEdit)

    if(this.state.isEdit){
      return (
        <li key={comment.id}>
          <form>
            <input type="text" name="comment_body">{comment.body}</input>
            <input type="text" name="comment_author">{comment.author}</input>
            <input type="submit" value="Save" />
          </form>
        </li>
      )}
    else{
      return(
        <li key={comment.id}>
          <p>{comment.body} by {comment.author}</p>
          <p><a href="" onClick={this.onEdit}>edit</a></p>
        </li>
      )}
  }
}

export default Comment
