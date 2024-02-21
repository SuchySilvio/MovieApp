// Import useEffect and useState hooks from React
import { useEffect, useState } from 'react';

// Import the MovieList component
import MovieList from '../components/MovieList';

// Import the fetchMovieDetails function from movieApi file
import { fetchMovieDetails } from '../api/movieApi';

// Import useSelector hook from Redux
import { useSelector } from 'react-redux';

// Import the SCSS file for styling
import '../styles/PageFavorites.scss';

// PageFavorites component definition
function PageFavorites() {
  // Getting favorite movies from Redux store
  const favorites = useSelector((state) => state.user.favorites);

  // Using the useState hook to manage state for favorite movies
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  // Fetching favorite movies when the component mounts or when favorites array changes
  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || []; // Getting favorite movie IDs from localStorage
      const favoriteMovies = await Promise.all(favoriteIds.map(fetchMovieDetails)); // Fetching details for favorite movies
      setFavoriteMovies(favoriteMovies.filter(movie => movie && favorites.includes(movie.id))); // Filtering out movies that are not in favorites array
    };

    fetchFavoriteMovies(); // Calling fetchFavoriteMovies function
  }, [favorites]); // Dependency array with favorites, so UseEffect runs when favorites array changes

  return (
    <div className="page-favorites-container"> {/* Container for the favorites page */}
      <h3>Your Favorites</h3> {/* Heading for the favorites section */}
      <div className="line"></div> {/* Horizontal line separator */}
      {favorites.length === 0 ? ( // Conditional rendering when favorites array is empty
        <div className="empty-favorites-container"> {/* Container for displaying message when favorites array is empty */}
          <p>You haven&apos;t added any movies to your Favorites List yet!</p> {/* Message when favorites array is empty */}
          <div className="favorites-instructions"> {/* Instructions for adding movies to favorites */}
            <p>Create your Favorites List by clicking the</p> 
            <div className="heart favorite"></div> {/* Heart icon */}
            <p>button by each movie.</p>
          </div>
        </div>
      ) : (
        <MovieList movies={favoriteMovies}/> // Rendering MovieList component with favoriteMovies when favorites array is not empty
      )}
      <div className="line"></div> {/* Horizontal line separator */}
    </div>
  );
}

// Export the PageFavorites component
export default PageFavorites;
