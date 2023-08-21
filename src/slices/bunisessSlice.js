import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../utils/api";

const businessSlice = createSlice({

    name: "business",
    initialState: {
        businesses: [],
        loadError: false,
        isLoading: false
    },
    reducers: {

        addBusiness: (state, action) => {

            state.businesses = action.payload;
            state.isLoading = false;
        },

        toggleIsLoading: (state) => {

            state.isLoading = true;
        },

        toggleLoadError: (state) => {

            state.loadError = true;
        }
    }
});

export const { addBusiness, toggleIsLoading, toggleLoadError } = businessSlice.actions;
export default businessSlice.reducer;

export const fetchBusinessMiddleware = (location, type, filter) => async(dispatch) => {

    try {

        dispatch(toggleIsLoading());

        const response = await fetchData(location, type, filter);

        dispatch(addBusiness(response));

    } catch(e) {
        
        dispatch(toggleLoadError());
    }

}