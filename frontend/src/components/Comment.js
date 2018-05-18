import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editComment, deleteComment, voteComment } from '../actions/action_comments'
import { updateCommentCount } from '../actions/action_posts'

class Comment extends Component {

  state = {
    isEdit: false
  }

  onEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  saveEdit = (e) => {
    e.preventDefault()
    this.props.editComment(this.props.comment.id, e.target[0].value)

    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  onDelete = (e) => {
    e.preventDefault()
    this.props.deleteComment(this.props.comment.id)
    this.props.updateCommentCount(this.props.post.id, -1)
  }

  onUpvote = (e) => {
    e.preventDefault()
    this.props.voteComment(this.props.comment.id, 'upVote')
  }

  onDownvote = (e) => {
    e.preventDefault()
    this.props.voteComment(this.props.comment.id, 'downVote')
  }

  render() {
    const comment =  this.props.comment

    if(this.state.isEdit){
      return (
        <div className="post-container">
          <form className="pure-form pure-form-stacked" onSubmit={this.saveEdit}>
            <input type="text" name="comment" defaultValue={comment.body} />
            <button type="submit" className="pure-button pure-button-primary">Save comment</button>
          </form>
        </div>
      )}
    else{
      return(
        <div className="post-container">
          <p>{comment.body}</p>
          <p>by {comment.author} | {comment.voteScore} votes</p>
          <div className="pure-button-group" role="group">
            <button className="pure-button" onClick={this.onEdit}>edit</button>
            <button className="pure-button" onClick={this.onDelete}>delete</button>
            <button className="pure-button" onClick={this.onUpvote}>upvote</button>
            <button className="pure-button" onClick={this.onDownvote}>downvote</button>
          </div>
        </div>
      )}
  }
}


const mapDispatchToProps = dispatch => {
  return{
    editComment: (id, comment) => dispatch(editComment(id, comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    updateCommentCount: (post_id, count) => dispatch(updateCommentCount(post_id, count)),
    voteComment: (id, vote) => dispatch(voteComment(id, vote))
  }
}

export default connect(null, mapDispatchToProps)(Comment);
