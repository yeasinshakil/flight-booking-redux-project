import { ADD_BOOKING, DELETE_BOOKING } from "./actionIdentifier"

export const addFlight = (data) => {
    return {
        type: ADD_BOOKING,
        payload: data
    }
}
export const deleteFlight = (data) => {
    return {
        type: DELETE_BOOKING,
        payload: data
    }
}