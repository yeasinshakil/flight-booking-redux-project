import { createStore } from "redux";
import bookingReducer from "./bookingReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(bookingReducer, composeWithDevTools());

export default store;