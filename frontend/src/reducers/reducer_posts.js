import  {
    ADD_POST,
    REMOVE_POST,
    EDIT_POST,
    GET_POSTS,
    GET_POST
} from '../actions/types'

import * as posts from '../actions/action_posts'

export default function (state = [], payload) {
    switch (payload.type) {
        case GET_POSTS:
            return [...state, ...payload.posts]
        case GET_POST:
            return [...state, ...payload.post]
        case ADD_POST:
            return state
            // return [...state, ...payload.posts]
        case REMOVE_POST:
            return state
        case EDIT_POST:
            return state
        default:
            return state
    }
}