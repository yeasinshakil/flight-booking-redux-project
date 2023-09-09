import { ADDBOOKING, DELETEBOOKING } from "./actionIdentifier"

export const addFlight = (data) => {
    return {
        type: ADDBOOKING,
        payload: data,
    }
}
export const deleteFligh = (data) => {
    return {
        type: DELETEBOOKING,
        payload: data,
    }
}