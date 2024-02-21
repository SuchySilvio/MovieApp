// Importing necessary hooks and actions from React and Redux
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToFavorites,
    removeFromFavorites,
    addToWatchList,
    removeFromWatchList
} from '../features/user/userSlice';

// Custom hook to manage movie status (favorite, watchlist)
export const useMovieStatus = (movieId) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites);
  const watchlist = useSelector((state) => state.user.watchlist);

  // State variables to track favorite and watchlist status
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInWatchList, setIsInWatchList] = useState(false);

  // Effect to update status when favorites or watchlist change
  useEffect(() => {
    setIsFavorite(favorites.includes(movieId));
    setIsInWatchList(watchlist.includes(movieId));
  }, [favorites, watchlist, movieId]);

  // Function to toggle favorite status
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movieId));
    } else {
      dispatch(addToFavorites(movieId));
    }
    setIsFavorite(!isFavorite);
  };

  // Function to toggle watchlist status
  const toggleWatchList = () => {
    if (isInWatchList) {
      dispatch(removeFromWatchList(movieId));
    } else {
      dispatch(addToWatchList(movieId));
    }
    setIsInWatchList(!isInWatchList);
  };

  // Returning status and toggle functions
  return {
    isFavorite,
    isInWatchList,
    toggleFavorite,
    toggleWatchList,
  };
};

// Function to generate star rating UI based on vote average
export const generateStars = (voteAverage) => {
  const numberOfStars = Math.round(voteAverage);
  return Array.from({ length: numberOfStars }, (_, index) => (
    <div key={index} className="star"></div>
  ));
};

// Function to get the complete poster path
export const getPosterPath = (posterPath) => {
    return posterPath
      ? `https://image.tmdb.org/t/p/w500${posterPath}`
      : '../../public/images/image-not-found.png'; // Fallback image path
  };
  
