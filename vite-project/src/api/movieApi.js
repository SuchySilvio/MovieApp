import axios from 'axios';

// API key for accessing TMDB API
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

// Base URL for TMDB API
const baseUrl = 'https://api.themoviedb.org/3';

// Fetch popular movies
export const fetchPopularMovies = async () => {
  try {
    const res = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return res.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

// Fetch movie details by ID
export const fetchMovieDetails = async (movieId) => {
  try {
    const res = await axios.get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching details for movie ID ${movieId}:`, error);
    return null;
  }
};

// Fetch top-rated movies
export const fetchTopRatedMovies = async () => {
  try {
    const res = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`);
    return res.data.results;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    return [];
  }
};

// Fetch now-playing movies
export const fetchNowPlayingMovies = async () => {
  try {
    const res = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`);
    return res.data.results;
  } catch (error) {
    console.error('Error fetching now-playing movies:', error);
    return [];
  }
};

// Fetch upcoming movies
export const fetchUpcomingMovies = async () => {
  try {
    const res = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`);
    return res.data.results;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

export const fetchMoviesByCategoryAndYear = async (category, year) => {
  try {
    // Ensure url points to the discover API
    let url = `${baseUrl}/discover/movie`;
    const params = {
      api_key: apiKey,
      // Apply sorting based on category, if applicable
      sort_by: category === 'top_rated' ? 'vote_average.desc' : 'popularity.desc',
      primary_release_year: year, // This ensures strict filtering by year
    };

    const res = await axios.get(url, { params });
    return res.data.results;
  } catch (error) {
    console.error(`Error fetching movies:`, error);
    return [];
  }
};


// Fetch movies by search query
export const searchMovies = async (query) => {
  try {
    const res = await axios.get(`${baseUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query: query,
      },
    });
    return res.data.results;
  } catch (error) {
    console.error(`Error searching movies with query "${query}":`, error);
    return [];
  }
};
