// types
import {
    ADD_CMT,
    REMOVE_CMT,
    EDIT_CMT,
    GET_CMTS
} from '../actions/types'

import * as posts from '../actions/action_comments'

export default function (state = [], payload) {
    switch (payload.type) {
        case GET_CMTS:
            return [...state, ...payload.comments]
        case ADD_CMT:
            return state
        case REMOVE_CMT:
            return state
        case EDIT_CMT:
            return state
        default:
            return state
    }
}