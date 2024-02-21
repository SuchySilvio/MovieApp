// Import createSlice function
import { createSlice } from '@reduxjs/toolkit';

const  initialState = {
    selectedCategory: 'popular', // Default category is popular
};

// Creating a slice for movies
const moviesSlice = createSlice({
    name: 'movies', // Name of the slice
    initialState, // Initial state
    reducers: {
        // Reducer function to set the selected category
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload; // Updating the selected category
        }
    },
});

// Extracting action creators and reducer from the slice
export const { setSelectedCategory } = moviesSlice.actions; // Action creator for setting selected category
export default moviesSlice.reducer; // Reducer function for the movies slice