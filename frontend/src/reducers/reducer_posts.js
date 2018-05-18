import  {
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    GET_POSTS,
    GET_POST,
    UPDATE_POST_CMT,
    VOTE_POST
} from '../actions/types'

export default function (state = [], payload) {
    switch (payload.type) {
        case GET_POSTS:
            return [...state, ...payload.posts]
        case GET_POST:
            return [...state, ...payload.post]
        case ADD_POST:
            return [...state, payload.post]
        case DELETE_POST:
            return state.map(post => {
                if(post.id === payload.id){
                    post.deleted = true
                    return post
                }
                return post
            })
            return state
        case EDIT_POST:
            return state.map(post => {
                if(post.id === payload.post.id){
                  return { ...post, ...payload.post }
                }
                return post
            })
        case UPDATE_POST_CMT:
            return state.map(post => {
                if(post.id === payload.id){
                    post.commentCount = post.commentCount + payload.count
                  return post
                }
                return post
            })
        case VOTE_POST:
            return state.map(post => {
                if(post.id === payload.post.id){
                    post.voteScore = payload.post.voteScore
                    return post
                }
                return post
            })
        default:
            return state
    }
}