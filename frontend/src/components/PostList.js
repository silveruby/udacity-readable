import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPosts } from '../actions/action_posts'

class PostList extends Component {

  componentDidMount() {
    if (this.props.posts.length == 0) { this.props.getPosts() }
  }

  render() {
    return (
      <div className="posts-list">
        <h2>
          <span>{this.props.category} Posts </span>
          <button>Add a new post</button>
        </h2>
        <ul>
          {
            (this.props.category ?
                this.props.posts.filter(post => post.category == this.props.category) : this.props.posts).map((post) => (
              <li key={post.id}>
                <p><Link to={`/${post.category}/${post.id}`}>{post.title}</Link> by {post.author}</p>
                <p># of comments: {post.commentCount}</p>
                <p>Current score: {post.voteScore}</p>
                <p><button>upvote</button><button>downvote</button></p>
                <p><Link to={`/${post.category}/${post.id}/edit`}>edit</Link> | <Link to={`/${post.category}/${post.id}/delete`}>delete</Link></p>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    posts: state.posts || []
  }
};

const mapDispatchToProps = dispatch => {
  return{
    getPosts: (category) => dispatch(getPosts(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
