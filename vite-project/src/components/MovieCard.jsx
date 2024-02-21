// Import the dateformat library for date formatting
import dateFormat from 'dateformat';

// Import PropTypes library for type-checking
import PropTypes from 'prop-types';

// Import Link component from react-router-dom
import { Link } from 'react-router-dom';

// Import utility functions
import { useMovieStatus, generateStars, getPosterPath } from '../utilities/useMovieStatus';

// Importing the SCSS file for styling
import "../styles/MovieCard.scss";

// MovieCard component definition
function MovieCard({ movie }) {
    // Destructuring movie object
    const { id, overview, title, release_date, vote_average } = movie;

    // Custom hook to manage movie status (favorite, watchlist)
    const { isFavorite, isInWatchList, toggleFavorite, toggleWatchList } = useMovieStatus(id);

    return (
        <div className={`movie-card`}> {/* Container for individual movie card */}
            <img src={getPosterPath(movie.poster_path)} alt={title} /> {/* Movie poster */}
            <div className='movie-data'> {/* Container for movie data j*/}
                <h3 className="movie-title">{title}</h3> {/* Movie title */}
                <p>{overview.substr(0, 65)}...</p> {/* Movie overview */}
                <button className="more-info-button" title="More Info">
                    <Link to={`/movie/${id}`}>More Info</Link> {/* Button for more info/link to movie details page */}
                </button>
                <div className="release-rating"> {/* Container for release date and rating */}
                    <div className="release-rating-labels"> {/* Labels for release date and rating */}
                        <p>Released:</p> {/* Label for release date */}
                        <p>Rating:</p> {/* Label for rating */}
                    </div>
                    <div className="release-rating-values"> {/* Values for release date and rating */}
                        <p>{dateFormat(release_date, "mmm dS, yyyy")}</p> {/* Formatted release date */}
                        <div className="star-container">{generateStars(vote_average)}</div> {/* Star rating */}
                    </div>
                </div>
                <div className="favorite-watchlist"> {/* Container for favorite and watchlist buttons */}
                    <button onClick={toggleFavorite} title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}> {/* Button for favorite */}
                        <div className={`heart ${isFavorite ? 'favorite' : ''}`}></div> {/* Heart icon */}
                    </button>
                    <button onClick={toggleWatchList} title={isInWatchList ? 'Remove from Watch List' : 'Add to Watch List'} className="plus-sign-button"> {/* Button for watch list*/}
                        <div className={`plus-sign ${isInWatchList ? 'watchlist' : ''}`}></div> {/* Plus sign icon */}
                    </button>
                </div>
            </div>
        </div>
    );
}

// PropTypes validation for the 'movie' prop
MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired, // 'id' is required and must be a number
        overview: PropTypes.string.isRequired, // 'overview' is required and must be a string
        poster_path: PropTypes.string.isRequired, // 'poster_path' is required and must be a string
        title: PropTypes.string.isRequired, // 'title' is required and must be a string
        release_date: PropTypes.string.isRequired, // 'release_date' is required and must be a string
        vote_average: PropTypes.number.isRequired, // 'vote_average' is required and must be a number
    }).isRequired, // 'movie' prop is required
};

// Export the MovieCard component
export default MovieCard;
