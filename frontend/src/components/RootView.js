import React, { Component } from 'react'
import Menu from './Menu'
import PostList from './PostList'
import PostAdd from './PostAdd'

class Root extends Component {
  render() {
    return (
      <div>
        <Menu />
        <PostList category = {this.props.match ? this.props.match.params.category : null } />
        <PostAdd />
      </div>
    );
  }
}

export default Root;
