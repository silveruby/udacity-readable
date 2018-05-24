import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/action_comments'
import { updateCommentCount } from '../actions/action_posts'

class CommentAdd extends Component {

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
    const body =  e.target[0].value
    const author =  e.target[1].value
    const parentId = this.props.post.id
    const comment = {body, author, parentId}
    this.props.addComment(comment)
    this.props.updateCommentCount(this.props.post.id, 1)

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
              <form  className="pure-form pure-form-stacked"  onSubmit={this.onSave}>
                <input type="text" name="comment_body" id="comment" placeholder="comment"></input>
                <input type="text" name="comment_author" id="author" placeholder="author"></input>
                <button className="pure-button pure-button-primary" type="submit">Add comment</button>
              </form>
            </div>
          </div>
        </div>
      )
    }
    else{
      return (
        <button className="pure-button" onClick={this.onAdd}>Add a comment</button>
        )
    }
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addComment: (data) => dispatch(addComment(data)),
    updateCommentCount: (post_id, count) => dispatch(updateCommentCount(post_id, count))
  }
}

export default connect(null, mapDispatchToProps)(CommentAdd);
