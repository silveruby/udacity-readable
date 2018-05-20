import  {
    GET_CATEGORIES
} from '../actions/types'

export default function (state = [], payload) {
    switch (payload.type) {
        case GET_CATEGORIES:
            if(payload.categories.categories)
            {
                console.log("1", state, payload.categories.categories)
                return [...state, ...payload.categories.categories]
            }
            else{
                console.log("2", state, payload.categories)
                return [...state, ...payload.categories]
            }
        default:
            return state
    }
}