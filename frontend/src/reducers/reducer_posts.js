import  {
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    GET_POSTS,
    GET_POST,
    UPDATE_POST_CMT,
    VOTE_POST,
    SORT_POST
} from '../actions/types'

export default function (state = [], payload) {
    switch (payload.type) {
        case GET_POSTS:
            return [...state, ...payload.posts]
        case GET_POST:
            return [...payload.post]
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
        case SORT_POST:
            if (payload.sortby === 'LOHI'){
                return state.sort((a,b) => a.voteScore - b.voteScore)
            }
            else{
                return state.sort((a,b) => b.voteScore - a.voteScore)
            }
        default:
            return state
    }
}