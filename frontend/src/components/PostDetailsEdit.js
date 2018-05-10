import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost } from '../actions/action_posts'
import CommentList from './CommentList'

// api
import * as api from '../actions/api'

class PostDetailsView extends Component {

  state = {
    post: {}
  }

  componentDidMount() {
    const {category, post_id} = this.props.match.params
    fetch(`${api.url}posts/${post_id}`, {headers: api.headers})
      .then(response => {
        if (!response.ok) {
          throw response
        } else  return response.json()
      })
      .then(post => { this.setState({post: post}) })
  }

  render() {
    const { post } = this.state

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
      // display post & comment
      return (
        // display post
        <div className="post-view">
          <div className="post">
            <h4><Link to={`/${post.category}`}>{post.category}</Link></h4>
            <h2>{post.title} by {post.author}</h2>
            <p>{post.body}</p>
            <p># of comments: {post.commentCount}</p>
            <p>Current score: {post.voteScore}</p>
            <p><button>upvote</button><button>downvote</button></p>
            <p><Link to={`/${post.category}/${post.id}/edit`}>edit</Link><Link to={`/${post.category}/${post.id}/delete`}>delete</Link></p>
          </div>
          <div className="post-votes">{post.voteScore}</div>
        </div>
        // display comment
        <CommentList />
      );
    }
  }
}


export default PostDetailsView
