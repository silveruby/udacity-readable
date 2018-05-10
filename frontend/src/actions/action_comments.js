// types
import {
	ADD_CMT,
	REMOVE_CMT,
	EDIT_CMT,
	GET_CMTS
} from './types'

// api
import * as api from './api'

// get comments
const getCommentsHelper = (comments) => {
  return {
    type: GET_CMTS,
    comments
  }
}

// get comments
export const getComments = (post_id) => {
  return dispatch => {
    fetch(`${api.url}posts/${post_id}/comments`, {headers: api.headers})
      .then(response => {
        if (!response.ok) {
          throw response
        } else  return response.json()
      })
      .then(comments => dispatch(getCommentsHelper(comments)))
      .catch(error => api.showError(error));
  }
}

export function addComment (){
	return {
		type: ADD_CMT
	}
}

export function removeComment (){
	return{
		type: REMOVE_CMT
	}
}

// edit comment
const editCommentHelper = (comment) => {
  return {
    type: GET_CMTS,
    comment
  }
}

// edit comment
export const editComment = (comment_id) => {
  return dispatch => {
    fetch(`${api.url}comments/${comment_id}`, {headers: api.headers})
      .then(response => {
        if (!response.ok) {
          throw response
        } else  return response.json()
      })
      .then(comment => dispatch(getCommentsHelper(comment)))
      .catch(error => api.showError(error));
  }
}
