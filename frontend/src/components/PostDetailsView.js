import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../actions/action_comments'
import { getPosts } from '../actions/action_posts'
import PostDetails from './PostDetails'
import CommentList from './CommentList'
import CommentAdd from './CommentAdd'

class PostDetailsView extends Component {

  componentDidMount() {
    const post_id = this.props.match.params.post_id
    if (this.props.comments.length === 0) { this.props.getComments(post_id) }
    if (this.props.posts.length === 0) { this.props.getPosts() }
  }

  render() {
    const post_id = this.props.match.params.post_id
    const post = this.props.posts.find(p => p.id === post_id)
    const comments = this.props.comments

    if(!post){
      return (
        <div>
          <p>404 Error</p>
        </div>
      )
    }
    else if(post.deleted){
       return (
        <div>
          <p>Post is deleted</p>
        </div>
      )
    }
    else{
      return (
        <div>
          <PostDetails post={post} />
          <CommentList comments={comments} post={post} />
          <CommentAdd post={post} />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    posts : state.posts || [],
    comments : state.comments || []
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getPosts : (post_id) => dispatch(getPosts(post_id)),
    getComments: (post_id) => dispatch(getComments(post_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsView);
