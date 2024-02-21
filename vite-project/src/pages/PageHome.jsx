// Import useState and useEffect hooks from React
import { useState, useEffect } from 'react';

// Import useDispatch and useSelector hooks from React Redux
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Import the MovieList component
import MovieList from '../components/MovieList';

import '../styles/PageHome.scss'; // Import the PageHome component's stylesheet

// Importing fetch functions for movie categories from movieApi file
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchMoviesByCategoryAndYear,
  searchMovies
} from '../api/movieApi';

// Importing action creator for setting selected category
import { setSelectedCategory } from '../features/movies/moviesSlice';

// PageHome component definition
function PageHome() {
  const [movies, setMovies] = useState([]); // State variable to store fetched movies
  const [selectedYear, setSelectedYear] = useState('2023'); // State variable to store selected year
  const [searchQuery, setSearchQuery] = useState(''); // State variable to store search query
  const dispatch = useDispatch(); // useDispatch hook for dispatching actions
  const selectedCategory = useSelector(state => state.movies.selectedCategory); // Getting selected category from Redux store

  useEffect(() => {
    const fetchMoviesData = async () => {
      let fetchedMovies = [];
      if (searchQuery.trim()) { // Check if searchQuery is not just whitespace
        fetchedMovies = await searchMovies(searchQuery);
      } else {
        switch (selectedCategory) {
          case 'top_rated':
            fetchedMovies = await fetchTopRatedMovies(selectedYear); // Assuming fetch function accepts year for filtering
            break;
          case 'now_playing':
            fetchedMovies = await fetchNowPlayingMovies(selectedYear);
            break;
          case 'upcoming':
            fetchedMovies = await fetchUpcomingMovies(selectedYear);
            break;
          default:
            fetchedMovies = await fetchPopularMovies(selectedYear);
            break;
        }
        fetchedMovies = await fetchMoviesByCategoryAndYear(selectedCategory, selectedYear);
      }
      const limitedMovies = fetchedMovies.slice(0, 12);
      setMovies(limitedMovies); // Updating movies state with fetched movies
      setMovies(fetchedMovies); // Update movies state with fetched movies
    };

    fetchMoviesData(); // Call fetchMoviesData function
  }, [selectedCategory, selectedYear, searchQuery]); // Include selectedYear in the dependency array to re-fetch when it changes

  // Event handler for category select change
  const handleCategoryChange = (event) => {
    const newCategory = event.target.value; // Getting new category from select input
    dispatch(setSelectedCategory(newCategory)); // Dispatching action to set selected category
  };

  // Event handler for year select change
  const handleYearChange = (event) => {
    const newYear = event.target.value; // Getting new year from select input
    dispatch(setSelectedYear(newYear)); // Directly updating selected year state
  };

  // Event handler for search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Updating search query state
  };

  return (
    <div id="page-home"> {/* Container for the home page */}
      <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-symbol" />
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      </div>
      <div id="category-select-form"> {/* Form for selecting movie category */}
        <label htmlFor="categorySelect">
          Show me
          <select id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
          </select>
          movies released in
          <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            {/* Add more options for other years */}
          </select>
        </label>
      </div>
      <div className="line"></div> {/* Horizontal line separator */}
      <MovieList movies={movies} /> {/* Rendering MovieList component with fetched movies */}
      <div className="line"></div> {/* Horizontal line separator */}
    </div>
  );
}

// Export the PageHome component
export default PageHome;
