import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions/action_categories'

class CategoryList extends Component {

  componentDidMount() {
    if (this.props.categories.length == 0) { this.props.getCategories() }
  }

  render() {
    console.log("categories: ", this.props)
    return (
        <nav className="navbar">
          <ul>
            <li key="home"><Link to='/'>home</Link></li>
            { this.props.categories.map((category) => (
              <li key={category.id}><Link to={`/${category.path}`}>{category.name}</Link></li>
            ))}
          </ul>
        </nav>
    );
  }
}

const mapStateToProps = state => {
  return{
    categories: state.categories || []
  }
};

const mapDispatchToProps = dispatch => {
  return{
    getCategories: (categories) => dispatch(getCategories(categories))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
