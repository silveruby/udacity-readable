// types
import {
    ADD_CMT,
    DELETE_CMT,
    EDIT_CMT,
    GET_CMTS,
    VOTE_CMT
} from '../actions/types'

export default function (state = [], payload) {
    switch (payload.type) {
        case GET_CMTS:
            return [...state, ...payload.comments]
        case ADD_CMT:
            return [...state, payload.comment]
        case DELETE_CMT:
            return state.map(comment => {
                if(comment.id === payload.id){
                    comment.deleted = true
                    return comment
                }
                return comment
            })
        case EDIT_CMT:
            return state.map(comment => {
                if(comment.id === payload.comment.id){
                  return { ...comment, ...payload.comment }
                }
                return comment
            })
        case VOTE_CMT:
            return state.map(comment => {
                if(comment.id === payload.comment.id){
                    comment.voteScore = payload.comment.voteScore
                    return comment
                }
                return comment
            })
        default:
            return state
    }
}