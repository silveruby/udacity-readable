import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getComments } from '../actions/action_comments'
import { getPosts } from '../actions/action_posts'
import PostDetails from './PostDetails'
import CommentList from './CommentList'

// api
import * as api from '../actions/api'

class PostDetailsView extends Component {

  componentDidMount() {
    const {category, post_id} = this.props.match.params
    if (this.props.comments.length == 0) { this.props.getComments(post_id) }
    if (this.props.posts.length == 0) { this.props.getPosts() }
  }

  render() {
    const {category, post_id} = this.props.match.params
    const post = this.props.posts.find(p => p.id == post_id)
    const comments = this.props.comments

    if(!post){
      return null
    }
    else if (post.delete){
      return "post deleted"
    }
    else if(this.props.match.url.match("/edit$")){
      return(
        // edit post
        <div className="create-edit-view">
          <form>
            <div>
              <label>Title:</label>
              <input type="text" name="title" value={post.title} />
            </div>
            <div>
              <label>Body:</label>
              <input type="text" name="body" value={post.body} />
            </div>
            <div>
              <label>Author:</label>
              <input type="text" name="author" value={post.author} />
            </div>
            <div>
              <label>Category:</label>
              <select name="category">
                <option value="value_">value_</option>
                <option value="value_">value_</option>
                <option value="value_">value_</option>
                <option value="value_">value_</option>
              </select>
            </div>
            <input type="submit" value="Create post" />
          </form>
        </div>
      )
    }
    else{
      return (
        <div className="post-details-comments">
          <PostDetails post={post} />
          <CommentList post={post} comments={comments} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    posts : state.posts || [],
    comments : state.comments || []
  }
};

const mapDispatchToProps = dispatch => {
  return{
    getPosts : (post_id) => dispatch(getPosts(post_id)),
    getComments: (post_id) => dispatch(getComments(post_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsView);
