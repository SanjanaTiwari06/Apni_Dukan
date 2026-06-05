import { CREATE_WISHLIST_RED, DELETE_WISHLIST_RED, GET_WISHLIST_RED, UDPATE_WISHLIST_RED } from "../Constant"
export default function WishlistReducer(state = [], action) {
    switch (action.type) {
        case CREATE_WISHLIST_RED:
            // Only add if response is valid (API success)
            if (!action.payload || !action.payload._id) return state
            return [...state, action.payload]

        case GET_WISHLIST_RED:
            // Safely handle undefined/null response
            return Array.isArray(action.payload) ? action.payload : []

        case UDPATE_WISHLIST_RED: {
            // Fixed: don't mutate state directly, return new array
            let index = state.findIndex(x => x._id === action.payload._id)
            if (index === -1) return state
            let newState = [...state]
            newState[index] = { ...action.payload }
            return newState
        }

        case DELETE_WISHLIST_RED:
            return state.filter(x => x._id !== action.payload._id)

        default:
            return state
    }
}
