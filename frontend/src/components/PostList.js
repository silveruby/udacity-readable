import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/action_posts'
import Post from './Post'

class PostList extends Component {

  componentDidMount() {
    if (this.props.posts.length === 0) { this.props.getPosts() }
  }

  render() {

    const posts = this.props.posts.filter(p => p.deleted === false)
    const hasCategory = this.props.category !== undefined

    if(hasCategory){
      return(
         <div className="pure-g">
          <div className="pure-u-1">
            <h2>
              <span>{this.props.category} Posts </span>
            </h2>
          </div>
          <div className="pure-u-1-2">
            { posts.filter(post => post.category === this.props.category).map(post => <Post post={post} /> )}
          </div>
        </div>
      )
    }
    else{
      return(
         <div className="pure-g">
          <div className="pure-u-1">
            <h2>
              <span>All Posts </span>
            </h2>
          </div>
          <div className="pure-u-1-2">
            { posts.map(post => <Post post={post} /> )}
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
};

const mapDispatchToProps = dispatch => {
  return{
    getPosts: (category) => dispatch(getPosts(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
