import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counter"

export default configureStore({
    //name of reducer and the actual reducer
reducer: {
    counter: counterReducer,
    // user: userReducer
}
})