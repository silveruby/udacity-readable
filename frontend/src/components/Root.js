import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Categories from './Categories'
import Posts from './Posts'

class Root extends Component {
  render() {
    return (
      <div className="root-view">
        <header>
          <h1>Readable App</h1>
          <Link to="/post-edit">Add a new post</Link>
        </header>

        <Categories />

        <Posts />

      </div>
    );
  }
}

export default Root;
