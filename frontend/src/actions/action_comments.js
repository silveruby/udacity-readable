// types
import {
	ADD_CMT,
	DELETE_CMT,
	EDIT_CMT,
	GET_CMTS,
  VOTE_CMT
} from './types'

// api
import * as api from './api'

import uuidv1 from 'uuid/v1'

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

// edit comment
const editCommentHelper = (comment) => {
  return {
    type: EDIT_CMT,
    comment
  }
}

// edit comment
export const editComment = (id, body) => {
  return dispatch => {
    fetch(`${api.url}comments/${id}`,
      {
        method: 'PUT',
        headers: {...api.headers, 'Content-Type': 'application/json'},
        body: JSON.stringify({ body, timestamp: Date.now() })
      })
      .then(response => {
        if (!response.ok) {
          throw response
        } else  return response.json()
      })
      .then(comment => dispatch(editCommentHelper(comment)))
      .catch(error => api.showError(error));
  }
}

// delete comment
const deleteCommentHelper = (id) => {
  return {
    type: DELETE_CMT,
    id
  }
}

// delete comment
export const deleteComment = (id) => {
  return dispatch => {
    fetch(`${api.url}comments/${id}`,
      {
        method: 'DELETE',
        headers: {...api.headers, 'Content-Type': 'application/json'}
      })
      .then(response => {
        if (!response.ok) {
          throw response
        } else  return response.json()
      })
      .then(dispatch(deleteCommentHelper(id)))
      .catch(error => api.showError(error));
  }
}

// add comment
const addCommentHelper = (comment) => {
  return {
    type: ADD_CMT,
    comment
  }
}

// add comment
export const addComment = (data) => {
  return dispatch => {
    fetch(`${api.url}comments`,
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
      .then(comment => dispatch(addCommentHelper(comment)))
      .catch(error => api.showError(error));
  }
}


// vote comment
const voteCommentHelper = (comment) => {
  return {
    type: VOTE_CMT,
    comment
  }
}

// vote comment
export const voteComment = (id, vote) => {
  return dispatch => {
    fetch(`${api.url}comments/${id}`,
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
      .then(comment => dispatch(voteCommentHelper(comment)))
      .catch(error => api.showError(error));
  }
}
