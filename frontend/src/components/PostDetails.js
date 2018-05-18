import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { editPost, deletePost, votePost } from '../actions/action_posts'

class PostDetails extends Component {

  state = {
    isEdit: false,
    isDeleted: false
  }

  onEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  saveEdit = (e) => {
    e.preventDefault()

    const title =  e.target[0].value
    const body =  e.target[1].value

    this.props.editPost(this.props.post.id, { title, body } )

    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  onDelete = (e) => {
    e.preventDefault()
    this.props.deletePost(e.target.id)

     this.setState({
      isDeleted: !this.state.isDeleted
    })
  }

  onUpvote = (e) => {
    e.preventDefault()
    this.props.votePost(e.target.id, 'upVote')
  }

  onDownvote = (e) => {
    e.preventDefault()
    this.props.votePost(e.target.id, 'downVote')
  }

  render() {
    const post = this.props.post

    if(this.state.isDeleted){
      return (
        <div className="pure-g">
          <div className="pure-u-1">
            <h4><Link to={`/${post.category}`}>{post.category}</Link></h4>
            <h1>Post is deleted</h1>
            <Link to='/'>Go back</Link>
          </div>
        </div>
      )
    }
    else if(this.state.isEdit){
      return (
        <div className="pure-g">
          <div className="pure-u-1-2">
            <div className="post-container">
              <form className="pure-form pure-form-stacked" onSubmit={this.saveEdit}>
                <input type="text" name="post_title" id="comment" placeholder="title" defaultValue={post.title}></input>
                <input type="text" name="post_body" id="comment" placeholder="body" defaultValue={post.body}></input>
                <button className="pure-button pure-button-primary" type="submit">Save</button>
              </form>
            </div>
          </div>
        </div>
      )
    }
    else{
      return (
        <div className="pure-g">
          <div className="pure-u-1">
            <h4><Link to={`/${post.category}`}>{post.category}</Link></h4>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>by {post.author} | {post.commentCount} comments | {post.voteScore} votes</p>
            <div className="pure-button-group" role="group">
              <button className="pure-button" id={post.id} onClick={this.onEdit}>edit</button>
              <button className="pure-button" id={post.id} onClick={this.onDelete}>delete</button>
              <button className="pure-button" id={post.id} onClick={this.onUpvote}>upvote</button>
              <button className="pure-button" id={post.id} onClick={this.onDownvote}>downvote</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapDispatchToProps = dispatch => {
  return{
    editPost: (id, data) => dispatch(editPost(id, data)),
    deletePost: (id) => dispatch(deletePost(id)),
    votePost: (id, vote) => dispatch(votePost(id, vote))
  }
}

export default connect(null, mapDispatchToProps)(PostDetails);