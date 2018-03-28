import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component {

  state = {
    categories: [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      },
      {
        name: 'udacity',
        path: 'udacity'
      }
    ]
  }

  render() {
    return (
        <div className="categories-list">
          <h2>Categories</h2>
          <ul>
            { this.state.categories.map((category) => (
              <li><Link to={`/${category.path}`}>{category.name}</Link></li>
            ))}
          </ul>
        </div>
    );
  }
}

export default Categories;
