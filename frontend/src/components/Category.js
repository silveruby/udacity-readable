import React, { Component } from 'react'
import Posts from './Posts'

class Category extends Component {
  render() {
    return (
      <div className="category-view">
        <Posts />
      </div>
    );
  }
}

export default Category;
