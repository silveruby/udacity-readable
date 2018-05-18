import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions/action_categories'

class Menu extends Component {

  componentDidMount() {
    if (this.props.categories.length === 0) { this.props.getCategories() }
  }

  render() {
    return (
        <div className="pure-menu pure-menu-horizontal">
          <Link className="pure-menu-heading pure-menu-link" to='/'>Home</Link>
          <ul className="pure-menu-list">
            { this.props.categories.map((category) => (
              <li className="pure-menu-item" key={category.name}><Link className="pure-menu-link" to={`/${category.name}`}>{category.name}</Link></li>
            ))}
          </ul>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
