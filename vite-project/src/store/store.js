// Import the configureStore function from '@reduxjs/toolkit' to create the Redux store
import { configureStore } from '@reduxjs/toolkit';

// Import reducers from feature slices
import moviesReducer from '../features/movies/moviesSlice'; // Import the movies slice reducer
import userReducer from '../features/user/userSlice'; // Import the user slice reducer

// Configure the Redux store
const store = configureStore({
    reducer: {
        movies: moviesReducer, // Add the movies reducer under the 'movies' key
        user: userReducer, // Add the user reducer under the 'user' key
    },
});

// Export the configured Redux store
export default store;