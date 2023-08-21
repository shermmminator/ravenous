import { configureStore, combineReducers } from "@reduxjs/toolkit";
import businessReducer from "./slices/bunisessSlice.js";

export default configureStore({
    reducer: combineReducers ({
        businesses: businessReducer
    })
});
