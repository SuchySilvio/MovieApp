// Import useState and useEffect hooks from React
import { useState, useEffect } from 'react';

// Import useParams hook from React Router
import { useParams } from 'react-router-dom';

// Import the MovieDetails component
import MovieDetails from '../components/MovieDetails';

// Import the fetchMovieDetails function from movieApi file
import { fetchMovieDetails } from '../api/movieApi';

// PageDetails component definition
function PageDetails() {
  // Fetch movie details using movie ID from URL params
  const { id } = useParams(); // Extracting movie ID from URL params
  const [movieDetails, setMovieDetails] = useState(null); // State variable to store movie details

  useEffect(() => {
    // Fetch movie details when the component mounts or when the movie ID changes
    const fetchDetails = async () => {
        const details = await fetchMovieDetails(id); // Fetching movie details
        setMovieDetails(details); // Updating movieDetails state with fetched details
    };

    fetchDetails(); // Calling fetchDetails function
  }, [id]); // Dependency array with id, so useEffect runs when id changes

  return (
    <div>
      {/* Rendering MovieDetails component if movieDetails is available, otherwise showing "Loading..." */}
      {movieDetails ? <MovieDetails movie={movieDetails} /> : <p>Loading...</p>}
    </div>
  );
}

// Export the PageDetails component
export default PageDetails;
