// types
import {
	ADD_POST,
	REMOVE_POST,
	EDIT_POST,
	GET_POSTS,
	GET_POST
} from './types'

// api
import * as api from './api'

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
	      .then(posts => dispatch(getPostsHelper(posts)))
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
export const getPost = (post_id) => {
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
	      .then(post => dispatch(getPostsHelper(post)))
	      .catch(error => api.showError(error));
	  }
	}
}

export function addPost (post){
	return {
		type: ADD_POST,
		post
	}
}

export function removePost (post_id){
	return{
		type: REMOVE_POST,
		post_id
	}
}

export function editPost (post_id){
	return{
		type: EDIT_POST,
		post_id
	}
}