import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE } from "../constants"

const initialState = {
    currentUser: null,
    posts: []
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USER_POSTS_STATE_CHANGE:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state;
    }
}