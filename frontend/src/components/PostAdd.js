import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/action_posts'
import CategoryList from './CategoryList'

class PostAdd extends Component {

  state = {
    isAdd: false
  }

  onAdd = () => {
    this.setState({
      isAdd: !this.state.isAdd
    })
  }

  onSave = (e) => {
    e.preventDefault()
    console.log(e.target[3])
    const title =  e.target[0].value
    const body =  e.target[1].value
    const author =  e.target[2].value
    const category = e.target[3].value

    this.props.addPost({title, body, author, category})

    this.setState({
      isAdd: !this.state.isAdd
    })
  }

  render() {
    if(this.state.isAdd){
      return(
        <div className="pure-g">
          <div className="pure-u-1-2">
            <div className="post-container">
              <form className="pure-form pure-form-stacked" onSubmit={this.onSave}>
                <input type="text" name="post_title" id="comment" placeholder="title"></input>
                <input type="text" name="post_body" id="comment" placeholder="body"></input>
                <input type="text" name="comment_author" id="author" placeholder="author"></input>
                <CategoryList />
                <button className="pure-button pure-button-primary" type="submit">Create post</button>
              </form>
            </div>
          </div>
        </div>
      )
    }
    else{
      return (
        <button className="pure-button" onClick={this.onAdd}>Add a post</button>
        )
    }
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addPost: (data) => dispatch(addPost(data))
  }
}

export default connect(null, mapDispatchToProps)(PostAdd);
