// types
import {
	GET_CATEGORIES
} from './types'

// api
import * as api from './api'

// get categories
const getCategoriesHelper = (categories) => {
	return {
    	type: GET_CATEGORIES,
    	categories
    }
}

// get categories
export const getCategories = () => {
  return dispatch => {
    fetch(`${api.url}categories`, {headers: api.headers})
      .then(response => {
        if (!response.ok) {
          throw response
        } else  return response.json()
      })
      .then(categories => dispatch(getCategoriesHelper(categories)))
      .catch(error => api.showError(error));
  }
}