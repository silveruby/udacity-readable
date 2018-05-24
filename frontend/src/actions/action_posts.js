// types
import {
	ADD_POST,
	DELETE_POST,
	EDIT_POST,
	GET_POSTS,
	GET_POST,
	UPDATE_POST_CMT,
	VOTE_POST,
  SORT_POST
} from './types'

// api
import * as api from './api'

import uuidv1 from 'uuid/v1'

// get posts
const getPostsHelper = (posts) => {
  return {
    type: GET_POSTS,
    posts
  }
}

// get posts
export const getPosts = (category) => {
	if (category == null ){
	  return dispatch => {
	    fetch(`${api.url}posts`, {headers: api.headers})
	      .then(response => {
	        if (!response.ok) {
	          throw response
	        } else  return response.json()
	      })
	      .then(posts => dispatch(getPostsHelper(posts)))
	      .catch(error => api.showError(error));
	  }
	}
	else{
	  return dispatch => {
	    fetch(`${api.url}:${category}posts`, {headers: api.headers})
	      .then(response => {
	        if (!response.ok) {
	          throw response
	        } else  return response.json()
	      })
	      .then(posts => dispatch(getPostHelper(posts)))
	      .catch(error => api.showError(error));
	  }
	}
}

// get post
const getPostHelper = (post) => {
  return {
    type: GET_POST,
    post
  }
}

// get post
export const getSinglePost = (post_id) => {
	if (post_id == null ){
		console.log("need post id to get post")
	}
	else{
	  return dispatch => {
	    fetch(`${api.url}posts/${post_id}`, {headers: api.headers})
	      .then(response => {
	        if (!response.ok) {
	          throw response
	        } else  return response.json()
	      })
	      .then(post => dispatch(getPostHelper(post)))
	      .catch(error => api.showError(error));
	  }
	}
}

// update comment count
export function updateCommentCount (id, count){
	return {
		type: UPDATE_POST_CMT,
		id,
		count
	}
}

// add post
const addPostHelper = (post) => {
  return {
    type: ADD_POST,
    post
  }
}

// add post
export const addPost = (data) => {
  return dispatch => {
    fetch(`${api.url}posts`,
      {
        method: 'POST',
        headers: {...api.headers, 'Content-Type': 'application/json'},
        body: JSON.stringify({...data, id: uuidv1(), timestamp: Date.now()})
      })
      .then(response => {
        if (!response.ok) {
          throw response
        } else  return response.json()
      })
      .then(post => dispatch(addPostHelper(post)))
      .catch(error => api.showError(error));
  }
}

// edit post
const editPostHelper = (post) => {
  return {
    type: EDIT_POST,
    post
  }
}

// edit post
export const editPost = (id, data) => {
  return dispatch => {
    fetch(`${api.url}posts/${id}`,
      {
        method: 'PUT',
        headers: {...api.headers, 'Content-Type': 'application/json'},
        body: JSON.stringify({...data, timestamp: Date.now() })
      })
      .then(response => {
        if (!response.ok) {
          throw response
        } else  return response.json()
      })
      .then(post => dispatch(editPostHelper(post)))
      .catch(error => api.showError(error));
  }
}

// delete comment
const deletePostHelper = (id) => {
  return {
    type: DELETE_POST,
    id
  }
}

// delete comment
export const deletePost = (id) => {
  return dispatch => {
    fetch(`${api.url}posts/${id}`,
      {
        method: 'DELETE',
        headers: {...api.headers, 'Content-Type': 'application/json'}
      })
      .then(response => {
        if (!response.ok) {
          throw response
        } else  return response.json()
      })
      .then(dispatch(deletePostHelper(id)))
      .catch(error => api.showError(error));
  }
}

// vote post
const votePostHelper = (post) => {
  return {
    type: VOTE_POST,
    post
  }
}

// vote post
export const votePost = (id, vote) => {
  return dispatch => {
    fetch(`${api.url}posts/${id}`,
      {
        method: 'POST',
        headers: {...api.headers, 'Content-Type': 'application/json'},
        body: JSON.stringify({option: vote})
      })
      .then(response => {
        if (!response.ok) {
          throw response
        } else  return response.json()
      })
      .then(post => dispatch(votePostHelper(post)))
      .catch(error => api.showError(error));
  }
}

// vote post
export const sortPosts = (sortby) => {
  return {
    type: SORT_POST,
    sortby
  }
}