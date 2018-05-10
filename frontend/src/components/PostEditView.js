import React, { Component } from 'react';

class PostEditView extends Component {
  render() {
    return (
      <div className="create-edit-view">
        <form>
          <div>
            <label>Title:</label>
            <input type="text" name="title" value="" />
          </div>
          <div>
            <label>Body:</label>
            <input type="text" name="body" value="" />
          </div>
          <div>
            <label>Author:</label>
            <input type="text" name="author" value="" />
          </div>
          <div>
            <label>Category:</label>
            <select name="category">
              <option value="value_">value_</option>
              <option value="value_">value_</option>
              <option value="value_">value_</option>
              <option value="value_">value_</option>
            </select>
          </div>
          <input type="submit" value="Create post" />
        </form>
      </div>
    );
  }
}

export default PostEditView;
