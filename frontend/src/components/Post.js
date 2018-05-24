import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { editPost, deletePost, votePost } from '../actions/action_posts'

class Post extends Component {

  state = {
    isEdit: false,
    edit_id: ""
  }

  onEdit = (e) => {
    this.setState({
      isEdit: !this.state.isEdit,
      edit_id: e.target.id
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
    this.context.router.replace('/')
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

    if(this.state.isEdit && (post.id === this.state.edit_id)){
      return (
        <div className="post-container">
          <form className="pure-form pure-form-stacked" onSubmit={this.saveEdit}>
            <input type="text" name="post_title" id="title" placeholder="title" defaultValue={post.title}></input>
            <input type="text" name="post_body" id="body" placeholder="body" defaultValue={post.body}></input>
            <button type="submit" className="pure-button pure-button-primary">Save post</button>
          </form>
        </div>
      )
    }
    else{
      return (
        <div className="post-container">
          <h2><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></h2>
          <p>by {post.author} | {post.commentCount} comments | {post.voteScore} votes</p>
          <div className="pure-button-group" role="group">
            <button className="pure-button" id={post.id} onClick={this.onEdit}>edit</button>
            <button className="pure-button" id={post.id} onClick={this.onDelete}>delete</button>
            <button className="pure-button" id={post.id} onClick={this.onUpvote}>upvote</button>
            <button className="pure-button" id={post.id} onClick={this.onDownvote}>downvote</button>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return{
    posts: state.posts || []
  }
}

const mapDispatchToProps = dispatch => {
  return{
    editPost: (id, data) => dispatch(editPost(id, data)),
    deletePost: (id) => dispatch(deletePost(id)),
    votePost: (id, vote) => dispatch(votePost(id, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);