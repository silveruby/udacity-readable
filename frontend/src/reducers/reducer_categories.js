import  {
    GET_CATEGORIES
} from '../actions/types'

export default function (state = [], payload) {
    switch (payload.type) {
        case GET_CATEGORIES:
            if(payload.categories.categories)
            {
                return [...state, ...payload.categories.categories]
            }
            else{
                return [...state, ...payload.categories]
            }
        default:
            return state
    }
}