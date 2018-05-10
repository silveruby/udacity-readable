import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import PostList from './PostList'

class Root extends Component {
  render() {
    return (
      <div className="root-view">
        <Menu />
        <PostList category = {this.props.match ? this.props.match.params.category : null } />
      </div>
    );
  }
}

export default Root;
