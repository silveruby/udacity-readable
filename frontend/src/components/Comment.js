import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Comment extends Component {

  state = {
    isEdit: false
  }

  onEdit = () => {
    console.log("onedit")
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  saveEdit = (value) => {
    console.log("saveedit")
  }

  render() {
    const post =  this.props.post
    const comment =  this.props.comment

    if(this.state.isEdit){
      return (
          <form>
            <input type="text" name="comment_body" value={comment.body} onChange={this.saveEdit(this.value)}/>
          </form>
      )}
    else{
      return(
          <div>
            <p>{comment.body}</p>
            <p><a href="" onClick={this.onEdit}>edit</a></p>
          </div>
      )}
  }
}

export default Comment
