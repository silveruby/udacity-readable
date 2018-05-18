import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

  state = {
    isAdd: false
  }

  onAdd = () => {
    this.setState({
      isAdd: !this.state.isAdd
    })
  }

  render() {
    const post = this.props.post
    const comments =  this.props.comments.filter(c => c.deleted === false)

    return (
      <div className="pure-g">
        <div className="pure-u-1-2">
          <h3>Comments</h3>
          <div>
            { comments.map(comment => <Comment comment={comment} post={post} /> )}
          </div>
        </div>
      </div>
    )
  }
}

export default CommentList
