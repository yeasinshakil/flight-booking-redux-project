import { ADD_BOOKING, DELETE_BOOKING } from "./actionIdentifier";

let initialState = [];

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        // adding flight booking
        case ADD_BOOKING:
            return [...state, action.payload]
        // deleting flight booking
        case DELETE_BOOKING:
            return [
                ...state.filter((itemDelete) => itemDelete.id !== action.payload)
            ]
        default:
            return state;
    }
}

export default bookingReducer;