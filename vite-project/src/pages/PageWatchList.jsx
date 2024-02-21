// Import useEffect and useState hooks from React
import { useEffect, useState } from 'react';

// Import the MovieList component
import MovieList from '../components/MovieList';

// Import the fetchMovieDetails function from movieApi file
import { fetchMovieDetails } from '../api/movieApi';

// Import useSelector hook from React Redux
import { useSelector } from 'react-redux';

// Import the SCSS file for styling
import '../styles/PageWatchList.scss';

// PageWatchList component definition
function PageWatchList() {
  const watchList = useSelector((state) => state.user.watchlist); // Getting watchlist movies from Redux store

  // Using the useState hook to manage state for watchlist movies
  const [watchListMovies, setWatchListMovies] = useState([]); 

  // Fetching watchlist movies when the component mounts or when watchlist array changes
  useEffect(() => {
    const fetchWatchListMovies = async () => {
      const watchListIds = JSON.parse(localStorage.getItem('watchlist')) || []; // Getting watchlist movie IDs from localStorage
      const watchListMovies = await Promise.all(watchListIds.map(fetchMovieDetails)); // Fetching details for watchlist movies
      setWatchListMovies(watchListMovies.filter(movie => movie && (watchList ?? []).includes(movie.id))); // Filtering out movies that are not in the watchlist array
    };

    fetchWatchListMovies(); // Calling fetchWatchListMovies function
  }, [watchList]); // Dependency array with watchList, so useEffect runs when watchList array changes

  return (
    <div className="page-watchlist-container"> {/* Container for the watchlist page */}
      <h3>Your Watch List</h3> {/* Heading for the watchlist section */}
      <div className="line"></div> {/* Horizontal line separator */}
      {watchListMovies.length === 0 ? ( // Conditional rendering when watchListMovies array is empty
        <div className="empty-watchlist-container"> {/* Container for displaying message when watchListMovies array is empty */}
          <p>You haven&apos;t added any movies to your Watch List yet!</p> {/* Message when watchListMovies array is empty */}
          <div className="watchlist-instructions"> {/* Instructions for adding movies to watchlist */}
            Create your Watch List by clicking the
            <div className="plus-sign watchlist"></div> {/* Plus sign icon */}
            button by each movie.
          </div>
        </div>
      ) : (
        <MovieList movies={watchListMovies}/> // Rendering MovieList component with watchListMovies when watchListMovies array is not empty
      )}
      <div className="line"></div> {/* Horizontal line separator */}
    </div>
  );
}

// Export the PageWatchList component
export default PageWatchList;
