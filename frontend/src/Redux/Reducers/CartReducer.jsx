import { CREATE_CART_RED, DELETE_CART_RED, GET_CART_RED, UDPATE_CART_RED } from "../Constant"
export default function CartReducer(state = [], action) {
    switch (action.type) {
        case CREATE_CART_RED:
            if (!action.payload || !action.payload._id) return state
            return [...state, action.payload]

        case GET_CART_RED:
            return Array.isArray(action.payload) ? action.payload : []

        case UDPATE_CART_RED: {
            // Fixed: don't mutate state directly
            let index = state.findIndex(x => x._id === action.payload._id)
            if (index === -1) return state
            let newState = [...state]
            newState[index] = { ...action.payload }
            return newState
        }

        case DELETE_CART_RED:
            return state.filter(x => x._id !== action.payload._id)

        default:
            return state
    }
}
