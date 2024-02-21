// Import createSlice function 
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [], // Array to store favorite movie IDs
    watchlist: [], // Array to store watchlist movie IDs
};

// Creating a slice for user-related state
const userSlice = createSlice({
    name: 'user', // Name of the slice
    initialState, // Initial state
    reducers: {
        // Reducer function to add a movie to favorites
        addToFavorites: (state, action) => {
            state.favorites = [...state.favorites, action.payload]; // Adding movie ID to favorites
            localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Updating localStorage
        },
        // Reducer function to remove a movie from favorites
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter((id) => id !== action.payload); // Removing movie ID from favorites
            localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Updating localStorage
        },
        // Reducer function to add a movie to the watchlist
        addToWatchList: (state, action) => {
            state.watchlist = [...state.watchlist, action.payload]; // Adding movie ID to the watchlist
            localStorage.setItem('watchlist', JSON.stringify(state.watchlist)); // Updating localStorage
        },
        // Reducer function to remove a movie from the watchlist
        removeFromWatchList: (state, action) => {
            state.watchlist = state.watchlist.filter((id) => id !== action.payload); // Removing movie ID from the watchlist
            localStorage.setItem('watchlist', JSON.stringify(state.watchlist)); // Updating localStorage
        }
    },
});

// Extracting action creators and reducer from the slice
export const {
    addToFavorites, // Action creator for adding a movie to favorites
    removeFromFavorites, // Action creator for removing a movie from favorites
    addToWatchList, // Action creator for adding a movie to the watchlist
    removeFromWatchList, // Action creator for removing a movie from the watchlist
} = userSlice.actions;

export default userSlice.reducer; // Reducer function for the user slice