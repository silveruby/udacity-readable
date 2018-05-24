import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/action_categories'

class CategoryList extends Component {

  componentDidMount() {
    if (this.props.categories.length === 0) { this.props.getCategories() }
  }

  render() {
    return (
        <select name="category">
          { this.props.categories.map((category) => (
            <option key={category.name} value={category.name}>{category.name}</option>
          ))}
        </select>
    );
  }
}


const mapStateToProps = state => {
  return{
    categories: state.categories || ['react', 'redux', 'udacity']
  }
};

const mapDispatchToProps = dispatch => {
  return{
    getCategories: (categories) => dispatch(getCategories(categories))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
